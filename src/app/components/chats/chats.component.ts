import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Chat } from 'src/app/modals/Chat.interface';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent {

  @Output() activateChat: EventEmitter<Chat> = new EventEmitter<Chat>();

  private subscription: Subscription = new Subscription();

  chats: Chat[] = [];
  filteredChats: Chat[] = [];

  constructor(private chatService: ChatService){ }

  ngOnInit(): void {
    this.subscription.add(
    this.chatService.getChats(Number(sessionStorage.getItem("userId"))).subscribe(
      data => {
        this.filteredChats = this.chats = data;
      }
    ));
  }

  onInputValueChange(value: string) {
    this.filteredChats = this.chats;
    this.filteredChats = this.filteredChats.filter(
      chat=>{
        return chat.name.toLowerCase().includes(value.toLowerCase());
      }
    );
  }
  onChatSelect(selectedChat: Chat) {
    this.activateChat.emit(selectedChat);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
