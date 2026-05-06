import { Component, Input, inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-toast',
  imports: [ToastModule],
  templateUrl: './toast.html',
  styleUrl: './toast.css',
})
export class Toast {
  @Input() mensaje = '';
  @Input() titulo = 'Mensaje';
  @Input() severity: 'success' | 'info' | 'warn' | 'error' = 'success';

  private messageService = inject(MessageService);

  mostrar(): void {
    this.messageService.add({
      severity: this.severity,
      summary: this.titulo,
      detail: this.mensaje,
    });
  }
}
