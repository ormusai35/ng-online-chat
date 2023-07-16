import { Component } from '@angular/core';
import { User } from 'src/app/modals/User.interface';
import { LoginService } from 'src/app/services/login.service';

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

  constructor(private loginService: LoginService) {}

  onSubmit(){
    this.loginService.addUser(this.user).subscribe(
      (response) => {
        console.log('User added successfully:', response);
        // You can perform further actions, like showing a success message or redirecting to another page.
      },
      (error) => {
        console.error('Error adding user:', error);
        // Handle error scenarios, like showing an error message.
      }
    );
  }
}
