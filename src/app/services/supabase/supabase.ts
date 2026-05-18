import { Injectable, signal } from '@angular/core';
import { createClient, SupabaseClient, RealtimeChannel, User } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class Supabase {
  usuarioLogueado = signal(false);
  nombreUsuario = signal('');

  dataUsuario: User | undefined;
  clienteSupabase: SupabaseClient;

  constructor() {
    this.clienteSupabase = createClient(environment.SUPABASE_URL, environment.SUPABASE_KEY);

    this.clienteSupabase.auth.getSession().then(({ data }) => {
      this.usuarioLogueado.set(!!data.session);
      this.dataUsuario = data.session?.user;
    });

    this.clienteSupabase.auth.onAuthStateChange((_event, session) => {
      this.usuarioLogueado.set(!!session);
      this.dataUsuario = session?.user;
    });
  }

  registrar(correo: string, clave: string) {
    return this.clienteSupabase.auth.signUp({
      email: correo,
      password: clave,
    });
  }

  async iniciarSesion(correo: string, clave: string) {
    const respuesta = await this.clienteSupabase.auth.signInWithPassword({
      email: correo,
      password: clave,
    });
    this.usuarioLogueado.set(!!respuesta.data.session);
    this.dataUsuario = respuesta.data.session?.user;
    return respuesta;
  }

  async cerrarSesion() {
    const respuesta = await this.clienteSupabase.auth.signOut();
    if (!respuesta.error) {
      this.usuarioLogueado.set(false);
      this.nombreUsuario.set('');
      this.dataUsuario = undefined;
    }
    sessionStorage.clear();
    localStorage.clear();
    return respuesta;
  }

  async guardarDatosUsuario(
    email: string,
    nombre: string,
    edad: number,
    apellido: string,
  ): Promise<boolean> {
    const { error } = await this.clienteSupabase
      .from('usuarios_registrados')
      .insert([{ email: email, nombre: nombre, edad: edad, apellido: apellido }]);
    if (error) {
      console.error('Error: ', error.message);
      return false;
    }
    return true;
  }
  obtenerDatosUsuario() {
    return this.clienteSupabase.from('usuarios_registrados').select('*');
  }

  async obtenerUsuarioPorMail(email: string) {
    const { data, error } = await this.clienteSupabase
      .from('usuarios_registrados')
      .select(`*`)
      .eq('email', email)
      .single();
    return data;
  }

  ///////////////////////////////////////CHAT//////////////////////////////////////////////////
  async getMessages() {
    return this.clienteSupabase
      .from('usuarios_post')
      .select('*, usuarios_registrados(nombre, email)')
      .order('created_at', { ascending: true });
  }

  subscribeToMessages(onNewMessage: () => void): RealtimeChannel {
    return this.clienteSupabase
      .channel('usuarios_post_changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'usuarios_post',
        },
        (payload) => {
          console.log('Realtime usuarios_post payload:', payload);
          onNewMessage();
        },
      )
      .subscribe((status, error) => {
        console.log('Realtime usuarios_post status:', status, error);
      });
  }

  unsubscribe(channel: RealtimeChannel) {
    return this.clienteSupabase.removeChannel(channel);
  }

  async postMessage(id_usuario_registrado: number, mensaje: string): Promise<void> {
    const { error } = await this.clienteSupabase.from('usuarios_post').insert([
      {
        id_usuario_registrado: id_usuario_registrado,
        mensaje: mensaje,
      },
    ]);
    if (error) {
      console.error('Error: ', error.message);
    }
  }

  ////////////////////////////////////////PUNTOS////////////////////////////////////////////////////////

  async obtenerPuntajes() {
    const { data, error } = await this.clienteSupabase.from('usuarios_puntajes').select(`*`);
    return data;
  }

  async obtenerPuntajesPorJuego(juego: string) {
    if (!this.validarJuego(juego)) {
      return;
    }
    const { data, error } = await this.clienteSupabase
      .from('usuarios_puntajes')
      .select('*,usuarios_registrados(nombre, apellido)')
      .eq('juego', juego)
      .order('puntaje', { ascending: false })
      .limit(15);
    return data;
  }

  async guardarPuntajes(juego: string, puntaje: number) {
    if (!this.validarJuego(juego)) {
      return;
    }

    const email = this.dataUsuario?.email;
    if (!email) {
      console.error('ERROR', 'No hay usuario logueado');
      return;
    }

    const usuario = await this.obtenerUsuarioPorMail(email);
    if (!usuario) {
      console.error('ERROR', 'No se encontraron datos del usuario');
      return;
    }

    const { error } = await this.clienteSupabase.from('usuarios_puntajes').insert([
      {
        id_usuario_registrado: usuario.id,
        juego: juego,
        puntaje: puntaje,
      },
    ]);
    if (error) {
      console.error('Error: ', error.message);
    }
  }

  validarJuego(juego: string): boolean {
    if (
      juego !== 'ahorcado' &&
      juego !== 'wordle' &&
      juego !== 'preguntados' &&
      juego !== 'mayormenor'
    ) {
      console.error('ERROR', 'juego no valido');
      return false;
    }
    return true;
  }
}
// Explicar las reglas como si nunca hubieran sido explicadas antes, y como si el interlocutor no tuviera ningún conocimiento previo sobre el tema.
// El quien soy va en el home -> una vez logueado solo los juegos y el quien soy.
// Registro validar los campos minimo de caracteres de contraseña. Si ya esta registrado no te deja. Usar email. Usuario es email .
// Usar modales -> toastify
