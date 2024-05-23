import { Component,inject } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:string = ""
  password:string = ""
  auth = inject(AuthService)
  router = inject(Router)
checkLogin(){
this.auth.login(this.username,this.password)
if(this.auth.isLoggedIn){
  this.router.navigateByUrl("")
  
} 
}
}
