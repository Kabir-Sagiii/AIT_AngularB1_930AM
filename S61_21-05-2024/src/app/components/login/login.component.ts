import { Component,inject } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:string = ""
  password:string = ""

 auth= inject(AuthService)

 loginUser(){
 this.auth.login(this.username,this.password)
 }

}
