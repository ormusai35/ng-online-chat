import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Contact } from 'src/app/modals/Contact.interface';
import { Message } from 'src/app/modals/Message.interface';
import { LoginService } from 'src/app/services/login.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit, OnChanges{

  @Input()
  activatedContact!: Contact; 

  // activeContact: Contact = {image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg", name:"or musai", status:"online"};

  messages: Message[] = []; 

  constructor(private messageService: MessageService, private userService: LoginService) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log("change!");
    console.log(this.activatedContact);
    this.messageService.getMessagesByUserAndContact(this.activatedContact).subscribe(
      data => {
        this.messages = data;
        console.log(this.messages);
      }  
    );
  }

  ngOnInit(): void {
  }

  handleMessage(msg: string) {
    let message: Message = {content: msg};
    this.messageService.sendMessage(this.activatedContact.id || 0, message).subscribe(
    );
  }
}
