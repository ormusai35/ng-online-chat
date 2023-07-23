import { Component } from '@angular/core';
import { Contact } from 'src/app/modals/Contact.interface';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  contact: Contact = {
    name: "",
    status: ''
  };

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.contact.image = file;
  }

  onAddContact() {
    
  }
}
