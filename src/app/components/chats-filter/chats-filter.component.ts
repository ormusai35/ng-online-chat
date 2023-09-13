import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chats-filter',
  templateUrl: './chats-filter.component.html',
  styleUrls: ['./chats-filter.component.css']
})
export class ChatsFilterComponent {
  @Output() inputValueChanged: EventEmitter<string> = new EventEmitter<string>();

  onInputChanged(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.inputValueChanged.emit(inputValue);
  }
}
