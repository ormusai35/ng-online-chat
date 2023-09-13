import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Chat } from 'src/app/modals/Chat.interface';
import { Contact } from 'src/app/modals/Contact.interface';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.css']
})
export class ChatAppComponent {
  activeChat: Chat = {
    id:0,
    name: "",
    creator:0,
    imageUrl:'',
    status: ''
  };
  
  onChatActivated(chat: Chat) {
    this.activeChat = chat;
  }
}
