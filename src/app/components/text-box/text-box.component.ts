import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent {

  textMessage: string = "";

  @Output() messageSent: EventEmitter<string> = new EventEmitter<string>();

  onSendMessage(){
    console.log(this.textMessage);
    this.messageSent.emit(this.textMessage);
    this.textMessage = "";
  }
}
