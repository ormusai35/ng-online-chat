import { Component } from '@angular/core';
import { Contact } from 'src/app/modals/Contact.interface';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent {
  // contacts: Contact[] = [{image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg", name:"or musai", status:"online"},{image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg", name:"or musai", status:"online"},{image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg", name:"or musai", status:"online"},{image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg", name:"or musai", status:"online"},{image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg", name:"or musai", status:"online"},{image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg", name:"or musai", status:"online"},{image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg", name:"or musai", status:"online"},{image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg", name:"or musai", status:"online"},{image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg", name:"or musai", status:"online"},{image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg", name:"or musai", status:"online"},{image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg", name:"or musai", status:"online"},{image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg", name:"or musai", status:"online"},{image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg", name:"or musai", status:"online"}];
  contacts: Contact[] = [];
}