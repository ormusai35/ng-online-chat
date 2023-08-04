import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/modals/Contact.interface';
import { ContactService } from 'src/app/services/contact.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {

  private subscription: Subscription = new Subscription();

  contact: Contact = {
    name: "",
    status: "offline"
  };

  constructor(private contactService: ContactService, private loginService: LoginService, private router:Router){}

  onAddContact(event: any) {
    this.subscription.add(
    this.contactService.addContact(this.contact, Number(sessionStorage.getItem('userId'))).subscribe(
      data => {
        event.target.reset();
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['chat']);
        });
      }
    ));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
 
}
