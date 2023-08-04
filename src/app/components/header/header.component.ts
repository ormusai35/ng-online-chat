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

}
