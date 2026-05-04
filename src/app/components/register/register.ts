import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink, InputGroupModule, InputGroupAddonModule, InputTextModule, ButtonModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  usuario = '';
  password = '';
  nombre: string = '';
  apellido: string = '';
  edad: number = 0;
  correo: string = '';
}
