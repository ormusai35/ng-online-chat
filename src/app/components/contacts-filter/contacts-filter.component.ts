import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contacts-filter',
  templateUrl: './contacts-filter.component.html',
  styleUrls: ['./contacts-filter.component.css']
})
export class ContactsFilterComponent {

  @Output() inputValueChanged: EventEmitter<string> = new EventEmitter<string>();

  onInputChanged(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.inputValueChanged.emit(inputValue);
  }

}
