import { Component, computed } from '@angular/core';
import { Router } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { Supabase } from '../../services/supabase/supabase';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  standalone: true,
  imports: [MenubarModule]
})
export class Navbar {
  readonly marca = 'Sala De Juegos';

  items = computed<MenuItem[]>(() => {
    const estaLogueado = this.sb.usuarioLogueado();

    return [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/home'
      },
      {
        label: 'Quien Soy',
        icon: 'pi pi-user',
        routerLink: '/about'
      },
      ...(estaLogueado
        ? [
          { 
            label:'Comunidad',
            icon: 'pi pi-users',
            items: [
                {
              label: 'Chat',
              icon: 'pi pi-comments',
              routerLink: '/chat'
                },
                {
                  label:'Mejores Jugadores',
                  icon: 'pi pi-list',
                  routerLink: '/resultados' 
                }
            ]
          },
            
            {
              label: 'Cerrar Sesion',
              icon: 'pi pi-sign-out',
              command: async () => {
                await this.sb.cerrarSesion();
                if (this.router.url.startsWith('/juegos') || this.router.url.startsWith('/chat')) {
                  await this.router.navigate(['/home']);
                }
              }
            }
          ]
        : [
            {
              label: 'Registrarse',
              icon: 'pi pi-user-plus',
              routerLink: '/register'
            }
          ])
    ];

  });

  readonly textoEstadoSesion = computed(() =>
    this.sb.usuarioLogueado() ? 'Sesion iniciada' : 'Modo invitado',
  );

  constructor(public sb: Supabase, private router: Router) {}
}
