import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  contactGroup = new FormGroup({
    name: new FormControl("",[Validators.required]),
    imageUrl: new FormControl("",[Validators.required, Validators.pattern('https?://.+')]),
    status: new FormControl("offline")
  });

  constructor(private contactService: ContactService, private loginService: LoginService, private router:Router){}

  onAddContact(form: FormGroup) {
    this.subscription.add(
    this.contactService.addContact(form.value, Number(sessionStorage.getItem('userId'))).subscribe(
      data => {
        form.reset();
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['chat']);
        });
      }
    ));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
  get name() {
    return this.contactGroup.get("name");
  }

  get imageUrl() {
    return this.contactGroup.get("imageUrl");
  }
}
