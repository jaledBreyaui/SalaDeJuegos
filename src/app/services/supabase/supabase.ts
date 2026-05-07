import { Injectable, signal } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class Supabase {
  usuarioLogueado = signal(false);

  clienteSupabase: SupabaseClient;

  constructor() {
    this.clienteSupabase = createClient(environment.SUPABASE_URL, environment.SUPABASE_KEY);
    this.clienteSupabase.auth.getSession().then(({ data }) => {
      this.usuarioLogueado.set(!!data.session);
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

  iniciarSesion(correo: string, clave: string) {
    return this.clienteSupabase.auth.signInWithPassword({
      email: correo,
      password: clave,
    });
  }

  verificarAutenticacion() {
    return this.clienteSupabase.auth.getUser();
  }

  yaEstaLogueado() {
    return this.clienteSupabase.auth.getSession();
  }

  cerrarSesion() {
    return this.clienteSupabase.auth.signOut();
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

}
// Explicar las reglas como si nunca hubieran sido explicadas antes, y como si el interlocutor no tuviera ningún conocimiento previo sobre el tema.
// El quien soy va en el home -> una vez logueado solo los juegos y el quien soy.
// Registro validar los campos minimo de caracteres de contraseña. Si ya esta registrado no te deja. Usar email. Usuario es email .
// Usar modales -> toastify 
