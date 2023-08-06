import { Component, EventEmitter, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/modals/Contact.interface';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit, OnDestroy {

  @Output() activateContact: EventEmitter<Contact> = new EventEmitter<Contact>();

  private subscription: Subscription = new Subscription();
  
  contacts: Contact[] = [];
  filteredContacts: Contact[] = [];

constructor(private contactService: ContactService){ }

  ngOnInit(): void {
    this.subscription.add(
    this.contactService.getContacts(Number(sessionStorage.getItem("userId"))).subscribe(
      data => {
        this.filteredContacts = this.contacts = data;
      }
    ));
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}