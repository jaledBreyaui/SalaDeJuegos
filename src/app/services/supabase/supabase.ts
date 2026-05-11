import { Injectable, signal } from '@angular/core';
import { createClient, SupabaseClient, RealtimeChannel, User } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class Supabase {
  usuarioLogueado = signal(false);
  dataUsuario : User | undefined
  clienteSupabase: SupabaseClient;

  constructor() {
    this.clienteSupabase = createClient(environment.SUPABASE_URL, environment.SUPABASE_KEY);
    this.clienteSupabase.auth.getSession().then(({ data }) => {
      this.usuarioLogueado.set(!!data.session);
      this.dataUsuario = data.session?.user;
    });

    this.clienteSupabase.auth.onAuthStateChange((_event, session) => {
      this.usuarioLogueado.set(!!session);
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
    return respuesta;
  }


  async cerrarSesion() {
    const respuesta = await this.clienteSupabase.auth.signOut();

    if (!respuesta.error) {
      this.usuarioLogueado.set(false);
    }

    return respuesta;
  }


  async guardarDatosUsuario(email: string, nombre: string, edad: number, apellido: string): Promise<boolean> {
    const { error } = await this.clienteSupabase.from('usuarios_registrados').insert([
      { email: email, nombre: nombre, edad: edad, apellido: apellido }
    ]);

    if (error) {
      console.error('Error: ', error.message);
      return false;
    }

    return true;
  }

  obtenerDatosUsuario() {
    return this.clienteSupabase.from('usuarios_registrados').select('*');
  }



async getMessages(){
  return this.clienteSupabase
    .from('usuarios_post')
    .select('*, usuarios_registrados(nombre)')
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
      }
    )
    .subscribe((status, error) => {
      console.log('Realtime usuarios_post status:', status, error);
    });
}

unsubscribe(channel: RealtimeChannel) {
  return this.clienteSupabase.removeChannel(channel);
}

async postMessage(){

}}
// Explicar las reglas como si nunca hubieran sido explicadas antes, y como si el interlocutor no tuviera ningún conocimiento previo sobre el tema.
// El quien soy va en el home -> una vez logueado solo los juegos y el quien soy.
// Registro validar los campos minimo de caracteres de contraseña. Si ya esta registrado no te deja. Usar email. Usuario es email .
// Usar modales -> toastify 
