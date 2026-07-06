import { Injectable, signal } from '@angular/core';
import { createClient, SupabaseClient, RealtimeChannel, User } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment.development';
import { UsuarioRegistrado } from '../../interfaces/usuario-registrado';
import { Encuesta } from '../../interfaces/encuesta';

@Injectable({
  providedIn: 'root',
})
export class Supabase {
  usuarioLogueado = signal(false);
  nombreUsuario = signal('');
  esAdmin = signal(false);
  usuarioRegistradoActual = signal<UsuarioRegistrado | null>(null);

  dataUsuario: User | undefined;
  clienteSupabase: SupabaseClient;

  constructor() {
    this.clienteSupabase = createClient(environment.SUPABASE_URL, environment.SUPABASE_KEY);

    this.cargarSesionActual();

    this.clienteSupabase.auth.onAuthStateChange(async (_event, session) => {
      this.usuarioLogueado.set(!!session);
      await this.sincronizarPerfilUsuario(session?.user);
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
    await this.sincronizarPerfilUsuario(respuesta.data.session?.user);
    return respuesta;
  }

  async cerrarSesion(): Promise<void> {
    const { error } = await this.clienteSupabase.auth.signOut();

    if (error) {
      console.error('Error al cerrar sesion en Supabase:', error.message);
      throw error;
    }

    this.limpiarSesionLocal();
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

  async obtenerUsuarioPorMail(email: string): Promise<UsuarioRegistrado | null> {
    const { data, error } = await this.clienteSupabase
      .from('usuarios_registrados')
      .select(`*`)
      .eq('email', email)
      .single();

    if (error) {
      console.error('Error: ', error.message);
      return null;
    }

    return data;
  }

  async obtenerUsuarioActual(): Promise<UsuarioRegistrado | null> {
    const usuarioActual = this.usuarioRegistradoActual();
    if (usuarioActual) {
      return usuarioActual;
    }

    let email = this.dataUsuario?.email;
    if (!email) {
      const { data } = await this.clienteSupabase.auth.getSession();
      this.dataUsuario = data.session?.user;
      email = data.session?.user.email;
      this.usuarioLogueado.set(!!data.session);
    }

    if (!email) {
      return null;
    }

    const usuario = await this.obtenerUsuarioPorMail(email);
    this.usuarioRegistradoActual.set(usuario);
    this.esAdmin.set(!!usuario?.es_admin);
    this.nombreUsuario.set(usuario?.nombre ?? '');
    return usuario;
  }

  async usuarioEsAdmin(): Promise<boolean> {
    const usuario = await this.obtenerUsuarioActual();
    return !!usuario?.es_admin;
  }

  async cargarSesionActual(): Promise<boolean> {
    const { data } = await this.clienteSupabase.auth.getSession();
    this.usuarioLogueado.set(!!data.session);
    await this.sincronizarPerfilUsuario(data.session?.user);
    return !!data.session;
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

  ////////////////////////////////////////ENCUESTAS////////////////////////////////////////////////////////

  async guardarEncuesta(
    preguntaUno: string,
    preguntaDos: string,
    preguntaTres: string,
  ): Promise<{ ok: boolean; mensaje: string }> {
    const usuario = await this.obtenerUsuarioActual();

    if (!usuario) {
      return { ok: false, mensaje: 'No hay un usuario valido para guardar la encuesta.' };
    }

    const { data: encuestaExistente, error: errorConsulta } = await this.clienteSupabase
      .from('encuestas')
      .select('id')
      .eq('id', usuario.id)
      .maybeSingle();

    if (errorConsulta) {
      console.error('Error: ', errorConsulta.message);
      return { ok: false, mensaje: 'No se pudo verificar si ya completaste la encuesta.' };
    }

    if (encuestaExistente) {
      return { ok: false, mensaje: 'Ya completaste la encuesta con este usuario.' };
    }

    const { error } = await this.clienteSupabase.from('encuestas').insert([
      {
        id: usuario.id,
        pregunta_uno: preguntaUno,
        pregunta_dos: preguntaDos,
        pregunta_tres: preguntaTres,
      },
    ]);

    if (error) {
      console.error('Error: ', error.message);
      return { ok: false, mensaje: 'No se pudo guardar la encuesta.' };
    }

    return { ok: true, mensaje: 'Encuesta guardada correctamente.' };
  }

  async obtenerEncuestas(): Promise<Encuesta[]> {
    const { data, error } = await this.clienteSupabase
      .from('encuestas')
      .select('id, pregunta_uno, pregunta_dos, pregunta_tres, created_at, usuarios_registrados(nombre, apellido, email, edad)')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error: ', error.message);
      return [];
    }

    return (
      data?.map((encuesta: any) => ({
        ...encuesta,
        usuarios_registrados: Array.isArray(encuesta.usuarios_registrados)
          ? (encuesta.usuarios_registrados[0] ?? null)
          : encuesta.usuarios_registrados,
      })) ?? []
    ) as Encuesta[];
  }

  private async sincronizarPerfilUsuario(user?: User): Promise<void> {
    this.dataUsuario = user;

    if (!user?.email) {
      this.nombreUsuario.set('');
      this.esAdmin.set(false);
      this.usuarioRegistradoActual.set(null);
      return;
    }

    const usuario = await this.obtenerUsuarioPorMail(user.email);
    this.usuarioRegistradoActual.set(usuario);
    this.nombreUsuario.set(usuario?.nombre ?? '');
    this.esAdmin.set(!!usuario?.es_admin);
  }

  private limpiarSesionLocal(): void {
    this.usuarioLogueado.set(false);
    this.nombreUsuario.set('');
    this.esAdmin.set(false);
    this.usuarioRegistradoActual.set(null);
    this.dataUsuario = undefined;
    sessionStorage.clear();
    localStorage.clear();
  }
}
// Explicar las reglas como si nunca hubieran sido explicadas antes, y como si el interlocutor no tuviera ningún conocimiento previo sobre el tema.
// El quien soy va en el home -> una vez logueado solo los juegos y el quien soy.
// Registro validar los campos minimo de caracteres de contraseña. Si ya esta registrado no te deja. Usar email. Usuario es email .
// Usar modales -> toastify
