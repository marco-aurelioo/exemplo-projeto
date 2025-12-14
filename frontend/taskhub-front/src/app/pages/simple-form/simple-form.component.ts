import { Component } from '@angular/core';
import { MsgServiceService } from '../../service/msg-service.service';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent {

  text = '';
  responseMessage = '';

  constructor(private messageService: MsgServiceService) {}

  submit() {
    this.messageService.sendMessage(this.text)
      .subscribe({
        next: (response) => {
          this.responseMessage = response;
        },
        error: () => {
          this.responseMessage = 'Erro ao enviar mensagem';
        }
      });
  }
}
