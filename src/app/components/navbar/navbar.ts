import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { Supabase } from '../../services/supabase/supabase';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  template: `
        <div class="card">
            <p-menubar [model]="items" />
        </div>
    `,
  standalone: true,
  imports: [MenubarModule]
})

export class Navbar implements OnInit {
  items: MenuItem[] | undefined;
  constructor(public sb: Supabase) { }
  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/home'
      },
      {
        label: 'Registrarse',
        icon: 'pi pi-user-plus',
        routerLink: '/register'
      },
      {
        label: 'Cerrar Sesión',
        icon: 'pi pi-sign-out',
        command: () => {
          this.sb.clienteSupabase.auth.signOut();
        }
      }
    ];
  }
}
