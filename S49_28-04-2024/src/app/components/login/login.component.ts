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

  loginUser(emailid:HTMLInputElement,password:HTMLInputElement){
     var logindetails = {
      email:emailid.value,
      password:password.value
     }
  
      this.httpclient.post("http://localhost:2929/users/login",logindetails).subscribe({
        next : (data:any)=>{
          console.log(data)
          localStorage.setItem('token',data.token)
        },
        error : ()=>{
          alert("Error while Login")
        }
      })

  }

}
