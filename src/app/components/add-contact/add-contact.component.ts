import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/modals/Contact.interface';
import { ContactService } from 'src/app/services/contact.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  contact: Contact = {
    name: "",
    status: "offline"
  };

  constructor(private contactService: ContactService, private loginService: LoginService, private router:Router){}

  onAddContact(event: any) {
    this.contactService.addContact(this.contact, this.loginService.getCurrentUser().id || 0).subscribe(
      data => {
        event.target.reset();
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['chat']);
        });
      }
    );
  }

 
}
