import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/modals/User.interface';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    userName : "",
    password: ""
  };

  error: string = "";

  constructor(private loginService: LoginService, private router: Router) {}

  login(){
    this.loginService.login(this.user.userName,this.user.password).subscribe({
      next: (data) => {
        this.loginService.setUser(data as User);
        console.log(data);
        this.router.navigate(['/chat']);  
      },
      error: (err) => {
        if(err.error){
          this.error = "Wrong password.";
        } else {
          this.error = "Username not exist.";
        }
      }
  });
  }
}
