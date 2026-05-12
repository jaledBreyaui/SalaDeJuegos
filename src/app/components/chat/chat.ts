import { Component, NgZone, OnDestroy, OnInit, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { RealtimeChannel, User } from '@supabase/supabase-js';
import { Supabase } from '../../services/supabase/supabase';
import { MensajeChat } from '../../interfaces/chat';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-chat',
  imports: [NgClass, FormsModule],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat implements OnInit, OnDestroy {
  mensajeNuevo=''
  mensajes = signal<MensajeChat[]>([]);
  private canalMensajes?: RealtimeChannel;
  dataUsuario: User | undefined
  constructor(
    private chat: Supabase,
    private ngZone: NgZone
  ) {
  }

  async ngOnInit(): Promise<void> {
    await this.cargarMensajes();
    this.dataUsuario = this.chat.dataUsuario
    this.canalMensajes = this.chat.subscribeToMessages(() => {
      this.ngZone.run(async () => {
        await this.cargarMensajes();
      });
    });
  }

  ngOnDestroy(): void {
    if (this.canalMensajes) {
      this.chat.unsubscribe(this.canalMensajes);
    }
  }

  private async cargarMensajes(): Promise<void> {
    const { data, error } = await this.chat.getMessages();
    if (error) {
      console.error('Error al obtener mensajes:', error.message);
      return;
    }
    this.mensajes.set(this.convertirTimeStamp((data ?? []) as MensajeChat[]));
  }

  async enviarMensaje(e:Event):Promise< void>{
    e.preventDefault();
    if(this.dataUsuario?.email && this.mensajeNuevo.length > 1){
      let respuesta = await this.chat.obtenerUsuarioPorMail(this.dataUsuario.email)
      await this.chat.postMessage(respuesta.id, this.mensajeNuevo)
      // console.log(respuesta)
    }

      
    this.mensajeNuevo= ''
  }

  esMensajePropio(mensaje: MensajeChat): boolean {
    return mensaje.usuarios_registrados?.email === this.dataUsuario?.email;
  }

  convertirTimeStamp(arr: MensajeChat[]): MensajeChat[] {
    for (const mensaje of arr) {
      mensaje.created_at = new Date(mensaje.created_at).toLocaleTimeString('es-AR', {
        timeZone: 'America/Argentina/Buenos_Aires',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
    }
    return arr;
  }
}
