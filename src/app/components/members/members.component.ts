import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Contact } from 'src/app/modals/Contact.interface';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  @Output() activateContact: EventEmitter<Contact> = new EventEmitter<Contact>();

  contacts: Contact[] = [];
  filteredContacts: Contact[] = [];

constructor(private contactService: ContactService){ }

  ngOnInit(): void {
    this.contactService.getContacts().subscribe(
      data => {
        this.filteredContacts = this.contacts = data;
        console.log(this.contacts);
      }
    );
  }

  onInputValueChange(value: string) {
    this.filteredContacts = this.contacts;
    this.filteredContacts = this.filteredContacts.filter(
      contact=>{
        return contact.name.toLowerCase().includes(value.toLowerCase());
      }
    );
  }
  onContactSelect(selectedContact: Contact) {
    this.activateContact.emit(selectedContact);
  }
}