import { Component } from '@angular/core';
import { User } from 'src/app/modals/User.interface';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  contacts: User[] = [];
  filteredContacts: User[] = [];


}
