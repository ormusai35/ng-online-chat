import { Component } from '@angular/core';
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

constructor(private loginService: LoginService) {}

  signUp(){
    this.loginService.createUser(this.user).subscribe({
        next: (data) => console.log(data),
        error: (err) => {
          console.log(this);
          console.log("error");
        }
    });
  }
}
