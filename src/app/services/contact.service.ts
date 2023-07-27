import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../modals/Contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'http://localhost:9090';

  contacts: Contact[] = [];

  constructor(private http: HttpClient) { }

  addContact(contact:Contact){
    console.log(contact);
    const url = `${this.apiUrl}/add-contact`;
    return this.http.post<Contact>(url, contact);
  }

  getContacts(): Observable<Contact[]> {
    const url = `${this.apiUrl}/get-all-contacts`;
    return this.http.get<Contact[]>(url);
  }
}
