import { Component } from '@angular/core';
import { User } from 'src/app/modals/User.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user:User = {
    username : "",
    email: "or@musai.com",
    password: ""
  };

  onSubmit(){
    console.log("click");
  }
}
