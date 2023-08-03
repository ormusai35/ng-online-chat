import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HTTP_URI } from '../constants/app.constants';
import { User } from '../modals/User.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUser:User = {
    userName: "",
    email: "",
    password: ""
  };

  constructor(private http: HttpClient) { }

  initialCurrentUser() {
    this.currentUser = {
        userName: "",
        email: "",
        password: ""
    }
  }
  getCurrentUser() :User{
    return this.currentUser;
  }
  login(userName:string, password:string) : Observable<User>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("userName",userName);
    queryParams = queryParams.append("password",password);

    const url = `${HTTP_URI}/login`;
    return this.http.get<User>(url, {params: queryParams});
  }
  createUser(user: User) : Observable<User>{
    const url = `${HTTP_URI}/create-user`;
    return this.http.post<User>(url, user);
  }
  setUser(user: User) {
    this.currentUser = user;
  }
  isConnect() :boolean {
    return (this.currentUser.userName.length != 0)
  }
}
