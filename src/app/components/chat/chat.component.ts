import { Component, Input } from '@angular/core';
import { Chat } from 'src/app/modals/Chat.interface';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  @Input() chat: Chat = {
    id:0,
    creator:0,
    name: '',
    imageUrl: '',
    status: 'offline'
  };
}
