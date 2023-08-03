import { AfterViewChecked, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/modals/Contact.interface';
import { Message } from 'src/app/modals/Message.interface';
import { LoginService } from 'src/app/services/login.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnChanges, AfterViewChecked{

  @Input()
  activatedContact!: Contact; 

  @ViewChild('messageList')
  messageList!: ElementRef;

  messages: Message[] = []; 

  constructor(private messageService: MessageService, private userService: LoginService, private router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.activatedContact)
    this.messageService.getMessagesByUserAndContact(this.activatedContact).subscribe(
      data => {
        this.messages = data;
      }  
    );
  }

  handleMessage(msg: string) {
    let message: Message = {content: msg, isMe: true, timestamp: new Date()};
    this.messageService.sendMessage(this.activatedContact.id || 0, message).subscribe(
      data => this.messages.push(data)
    );
  }

  ngAfterViewChecked() {
    this.messageList.nativeElement.scrollTop = this.messageList.nativeElement.scrollHeight;
  }
}
