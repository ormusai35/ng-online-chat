import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent {
  
  constructor(private loginService:LoginService, private router:Router) {}

  logOut(){
    this.loginService.initialCurrentUser();
    this.router.navigate(['login']);
  }
}
