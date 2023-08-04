import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HTTP_URI } from '../constants/app.constants';
import { User } from '../modals/User.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  currentUser:User = {
    userName: "",
    email: "",
    password: ""
  };

  constructor(private http: HttpClient) {
    console.log("Login Service Constructor!");

    const stringUserId = sessionStorage.getItem("userId");
    if(stringUserId != null){
      this.isLoggedIn$.next(true);
    }
   }

  initialCurrentUser() {
    this.currentUser = {
        userName: "",
        email: "",
        password: ""
    }
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
  isLoggedIn() :Observable<boolean> {
    return this.isLoggedIn$.asObservable();
  }
}
