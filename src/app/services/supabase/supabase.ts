import { Injectable, signal } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class Supabase {
  usuarioLogueado = signal(false);
  nombreUsuario = signal('');

  clienteSupabase: SupabaseClient;

  constructor() {
    this.clienteSupabase = createClient(environment.SUPABASE_URL, environment.SUPABASE_KEY);

    this.clienteSupabase.auth.getSession().then(({ data }) => {
      this.usuarioLogueado.set(!!data.session);
      this.cargarNombreUsuario(data.session?.user.email ?? null);
    });

    this.clienteSupabase.auth.onAuthStateChange((_event, session) => {
      this.usuarioLogueado.set(!!session);
      this.cargarNombreUsuario(session?.user.email ?? null);
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
      this.nombreUsuario.set('');
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
    return this.clienteSupabase.from('usuariosTabla').select('*');
  }

  private async cargarNombreUsuario(email: string | null) {
    if (!email) {
      this.nombreUsuario.set('');
      return;
    }
    this.nombreUsuario.set(email);
    const { data, error } = await this.clienteSupabase
      .from('usuarios_registrados')
      .select('nombre')
      .eq('email', email)
      .maybeSingle();
    if (error) {
      console.error('Error al cargar usuario: ', error.message);
    }
    this.nombreUsuario.set(data?.nombre ?? email);
  }

}
// Explicar las reglas como si nunca hubieran sido explicadas antes, y como si el interlocutor no tuviera ningún conocimiento previo sobre el tema.
// El quien soy va en el home -> una vez logueado solo los juegos y el quien soy.
// Registro validar los campos minimo de caracteres de contraseña. Si ya esta registrado no te deja. Usar email. Usuario es email .
// Usar modales -> toastify 
