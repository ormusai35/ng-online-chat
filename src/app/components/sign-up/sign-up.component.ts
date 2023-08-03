import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/modals/User.interface';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user:User = {
    userName : "",
    email: "",
    password: ""
  };

constructor(private loginService: LoginService, private router: Router) {}

  signUp(){
    this.loginService.createUser(this.user).subscribe({
        next: (data) => {
          this.loginService.setUser(data as User);
          this.router.navigate(['chat']);
        },
        error: (err) => {
          console.log("error");
        }
    });
  }
}
