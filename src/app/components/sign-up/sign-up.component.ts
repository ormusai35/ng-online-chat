import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/modals/User.interface';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnDestroy{

  private subscription: Subscription = new Subscription();
  
  user:User = {
    userName : "",
    email: "",
    password: ""
  };

  constructor(private loginService: LoginService, private router: Router) {}

  signUp(){
    this.subscription.add(
    this.loginService.createUser(this.user).subscribe({
        next: (data) => {
          this.loginService.setUser(data as User);
          sessionStorage.setItem('userId',(data.id || 0).toString());
          this.router.navigate(['chat']);
        },
        error: (err) => {
          console.log("error");
        }
    }));
  }
  
  ngOnDestroy() :void{
    this.subscription.unsubscribe();
  }
}
