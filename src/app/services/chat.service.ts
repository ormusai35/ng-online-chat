import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HTTP_URI } from '../constants/app.constants';
import { Chat } from '../modals/Chat.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  chats: Chat[] = [];

  constructor(private http: HttpClient) { }

  addChat(chat:Chat, userId: number) :Observable<Chat>{
    const url = `${HTTP_URI}/add-chat`;
    const params = new HttpParams().set('userId', userId);

    return this.http.post<Chat>(url, chat, {params: params});
  }

  getChats(userId:number): Observable<Chat[]> {
    const url = `${HTTP_URI}/get-chats/${userId}`;
    return this.http.get<Chat[]>(url);
  }
}
