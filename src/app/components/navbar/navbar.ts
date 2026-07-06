import { Component, OnInit, computed, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Supabase } from '../../services/supabase/supabase';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  standalone: true,
  imports: [MenubarModule, ToastModule]
})
export class Navbar implements OnInit {
  readonly marca = 'Sala De Juegos';
  private readonly timeoutCerrarSesionMs = 20000;
  cerrandoSesion = signal(false);

  items = computed<MenuItem[]>(() => {
    const estaLogueado = this.sb.usuarioLogueado();
    const esAdmin = this.sb.esAdmin();
    const itemsComunidad: MenuItem[] = [
      {
        label: 'Chat',
        icon: 'pi pi-comments',
        routerLink: '/chat',
      },
      {
        label: 'Mejores Jugadores',
        icon: 'pi pi-list',
        routerLink: '/resultados',
      },
      {
        label: 'Encuesta',
        icon: 'pi pi-file-edit',
        routerLink: '/comunidad/encuesta',
      },
    ];

    if (esAdmin) {
      itemsComunidad.push({
        label: 'Resultados Encuestas',
        icon: 'pi pi-chart-bar',
        routerLink: '/comunidad/resultados-encuestas',
      });
    }

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
            items: itemsComunidad
          },
            
            {
              label: this.cerrandoSesion() ? 'Cerrando...' : 'Cerrar Sesion',
              icon: 'pi pi-sign-out',
              disabled: this.cerrandoSesion(),
              command: () => this.cerrarSesion(),
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

  constructor(
    public sb: Supabase,
    private router: Router,
    private messageService: MessageService,
  ) {}

  async ngOnInit(): Promise<void> {
    try {
      await this.sb.cargarSesionActual();
    } catch (error) {
      console.error('No se pudo cargar la sesion actual:', error);
    }
  }

  async cerrarSesion(): Promise<void> {
    if (this.cerrandoSesion()) {
      return;
    }

    this.cerrandoSesion.set(true);
    try {
      await this.conTimeout(
        this.sb.cerrarSesion(),
        this.timeoutCerrarSesionMs,
        'Supabase no respondio al cerrar sesion.',
      );
      await this.router.navigate(['/home']);
    } catch (error) {
      console.error('Error al cerrar sesion:', error);
      this.messageService.add({
        severity: 'error',
        summary: 'No se pudo cerrar sesion',
        detail: 'Supabase no respondio o devolvio un error. Revisa la consola.',
      });
    } finally {
      this.cerrandoSesion.set(false);
    }
  }

  private conTimeout<T>(promesa: Promise<T>, milisegundos: number, mensaje: string): Promise<T> {
    return Promise.race([
      promesa,
      new Promise<T>((_resolve, reject) => {
        setTimeout(() => reject(new Error(mensaje)), milisegundos);
      }),
    ]);
  }
}
