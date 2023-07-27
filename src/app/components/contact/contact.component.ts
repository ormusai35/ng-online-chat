import { Component, Input } from '@angular/core';
import { Contact } from 'src/app/modals/Contact.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Input() contact: Contact = {
    name: '',
    status: ''
  };
}
