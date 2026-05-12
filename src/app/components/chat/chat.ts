import { Component, NgZone, OnDestroy, OnInit, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { RealtimeChannel, User } from '@supabase/supabase-js';
import { Supabase } from '../../services/supabase/supabase';
import { MensajeChat } from '../../interfaces/chat';


@Component({
  selector: 'app-chat',
  imports: [NgClass],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat implements OnInit, OnDestroy {

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
    console.log(this.mensajes())
    this.dataUsuario = this.chat.dataUsuario
    console.log(this.dataUsuario)

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
    this.mensajes.set((data ?? []) as MensajeChat[]);
  }

  esMensajePropio(mensaje: MensajeChat): boolean {
    return mensaje.usuarios_registrados?.email === this.dataUsuario?.email;
  }
}
