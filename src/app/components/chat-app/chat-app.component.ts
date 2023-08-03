import { Component } from '@angular/core';
import { Contact } from 'src/app/modals/Contact.interface';

@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.css']
})
export class ChatAppComponent {
  activeContact: Contact = {
    name: "",
    status: ''
  };
  onContactActivated(contact: Contact) {
    this.activeContact = contact;
  }

}
