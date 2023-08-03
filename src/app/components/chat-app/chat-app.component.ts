import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/modals/Contact.interface';
import { LoginService } from 'src/app/services/login.service';

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
