import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private httpclient:HttpClient){

  }

   login(email:any,password:any){
    console.log(email.value,password.value)
    var userlogindata = {
      email:email.value,
      password:password.value
    }
    this.httpclient.post("http://localhost:2929/users/login",userlogindata)
    .subscribe({
      next : (data:any)=>{
       console.log(data)
         localStorage.setItem('token',data.token)
      },
      error : (error)=>{
        alert("Failed to Login")
        console.log(error)
      }
    })
   }

}
