import { Component, NgZone, OnDestroy, OnInit, signal } from '@angular/core';
import { RealtimeChannel, User } from '@supabase/supabase-js';
import { Supabase } from '../../services/supabase/supabase';

type MensajeChat = {
  mensaje?: string;
  texto?: string;
  contenido?: string;
  usuarios_registrados?: {
    nombre?: string;
  };
};

@Component({
  selector: 'app-chat',
  imports: [],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat implements OnInit, OnDestroy {

  mensajes = signal<string[]>([]);
  private canalMensajes?: RealtimeChannel;
  dataUsuario: User | undefined
  constructor(
    private chat:Supabase,
    private ngZone: NgZone
  ){
  }
  
  async ngOnInit(): Promise<void> {
    await this.cargarMensajes();
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

    this.mensajes.set(
      (data as MensajeChat[]).map((mensaje) => {
        const nombre = mensaje.usuarios_registrados?.nombre ?? 'Sin nombre';
        const texto = mensaje.mensaje ?? mensaje.texto ?? mensaje.contenido ?? '';
        return `${nombre}: ${texto}`;
      })
    );
  }
}
