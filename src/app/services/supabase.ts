import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class Supabase {

  clienteSupabase: SupabaseClient;

  constructor(private router: Router) {
    this.clienteSupabase = createClient(environment.SUPABASE_URL, environment.SUPABASE_KEY);
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


  guardarDatosUsuario(correoUsuario: string, usuarioNombre: string, usuarioEdad: number) {
    this.clienteSupabase.from('usuariosTabla').insert([
      { email: correoUsuario, nombre: usuarioNombre, edad: usuarioEdad }
    ]).then(({ data, error }) => {
      if (error) {
        console.error('Error: ', error.message);
      } else {
        this.router.navigate(['/home']);
      }
    });
  }

  obtenerDatosUsuario() {
    return this.clienteSupabase.from('usuariosTabla').select('*');
  }

}
// Explicar las reglas como si nunca hubieran sido explicadas antes, y como si el interlocutor no tuviera ningún conocimiento previo sobre el tema.
// El quien soy va en el home -> una vez logueado solo los juegos y el quien soy. 
// Registro validar los campos minimo de caracteres de contraseña. Si ya esta registrado no te deja. Usar email. Usuario es email .
// Usar modales -> toastify 