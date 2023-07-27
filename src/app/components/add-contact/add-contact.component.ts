import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/modals/Contact.interface';
import { ContactService } from 'src/app/services/contact.service';

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

  constructor(private contactService: ContactService, private router:Router){}

  // onFileSelected(event: any) {
  //   const file: File = event.target.files[0];
  //   this.contact.image = file;
  // }


  // onFileSelected(event: any) {
  //   const file: File = event.target.files[0];

  //   // Convert the selected image to base64 encoding
  //   this.getBase64(file).then((base64Image: string) => {
  //     this.contact.image = base64Image;
  //   });
  // }

  // getBase64(file: File): Promise<string> {
  //   return new Promise<string>((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => resolve(reader.result as string);
  //     reader.onerror = (error) => reject(error);
  //   });
  // }

  onAddContact(event: any) {
    this.contactService.addContact(this.contact).subscribe(
      data => {
        event.target.reset();
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['chat']);
        });
      }
    );
  }




  // Use the navigate method to navigate to the current URL
 
}
