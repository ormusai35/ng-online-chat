import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Contact } from 'src/app/modals/Contact.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input()
  activatedContact!: Contact;

  // activeContact: Contact = {id:0, name:"or musai", status:"online", imageUrl: "https://gravatar.com/avatar/75cfb300d491279b1e2fdf02669987d3?s=400&d=robohash&r=x"};

}
