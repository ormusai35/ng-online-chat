import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../modals/User.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'https://localhost:9089'; // Replace this with your server API URL


  constructor(private http: HttpClient) { }

  addUser(user: User) : Observable<User>{
    const url = `${this.apiUrl}/addUser`;
    return this.http.post<User>(url, user);
  }


}
