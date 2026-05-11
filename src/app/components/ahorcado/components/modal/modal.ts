import { Component } from '@angular/core';
import { Button, ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
@Component({
  selector: 'app-modal',
  imports: [ButtonModule, DialogModule],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
