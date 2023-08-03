import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HTTP_URI } from '../constants/app.constants';
import { Contact } from '../modals/Contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[] = [];

  constructor(private http: HttpClient) { }

  addContact(contact:Contact, userId: number) :Observable<Contact>{
    const url = `${HTTP_URI}/add-contact`;
    const params = new HttpParams().set('userId', userId);

    return this.http.post<Contact>(url, contact, {params: params});
  }

  getContacts(): Observable<Contact[]> {
    const url = `${HTTP_URI}/get-all-contacts`;
    return this.http.get<Contact[]>(url);
  }
}
