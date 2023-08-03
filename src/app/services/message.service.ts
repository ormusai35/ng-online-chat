import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../modals/Contact.interface';
import { Message } from '../modals/Message.interface';
import { User } from '../modals/User.interface';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private apiUrl = 'http://localhost:9090';

  constructor(private http: HttpClient) { }

  getMessagesByUserAndContact(activeContact: Contact) :Observable<Message[]>{
    const url = `${this.apiUrl}/get-messages-user-contact`;

    let queryParams = new HttpParams();
    queryParams = queryParams.append("contactId",activeContact.id || 0);

    return this.http.get<Message[]>(url, {params: queryParams});
  }

  sendMessage(contactId: number, message: Message): Observable<Message> {
    const url = `${this.apiUrl}/send-message`;

    const params = new HttpParams().set('contactId', contactId);

    // let queryParams = new HttpParams();
    // queryParams = queryParams.append("contactId",contactId);
    // queryParams = queryParams.append("content",message);

    // return this.http.post<Message>(url, {params: queryParams});
    return this.http.post<Message>(url, message ,{params: params});
  }

}
