import { Injectable,inject } from '@angular/core';
import { RegisteredusersService } from './registeredusers.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 isLoggedIn:boolean = false
 user:any
   registeredusers =inject(RegisteredusersService)
   router = inject(Router)

 login(username:string,password:string){
    this.user=  this.registeredusers.registeredUsers.find((element:any)=>{
      return element.username === username && element.password === password
     })

     if(this.user === undefined){
      alert("User Doesnt Exist, Create the Account")
     }else {
      this.router.navigateByUrl("/")
      this.isLoggedIn = true 

     }
 }

 logout(){
  this.isLoggedIn = false
 }
  constructor() { }
}
