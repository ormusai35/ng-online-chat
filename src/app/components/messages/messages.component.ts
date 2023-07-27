import { Component } from '@angular/core';
import { Contact } from 'src/app/modals/Contact.interface';
import { Message } from 'src/app/modals/Message.interface';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  // activeContact: Contact = {image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg", name:"or musai", status:"online"};
  
  activeContact: Contact = {name:"or musai", status:"online", imageUrl: "https://gravatar.com/avatar/75cfb300d491279b1e2fdf02669987d3?s=400&d=robohash&r=x"};
  messages: Message[] = [{sender: "Gil Musai", message: "Hi, How are you ?"},{sender: "me", message: "I'm fine, thank you."}]; 
}
