import { Injectable,inject } from '@angular/core';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
isLoggedIn:boolean = false
users = inject(UsersService)
user:any
  constructor() { }

  login(username:string,password:string){
     this.user=  this.users.users.find((user:any)=>{ console.log(user) 
      return user.username===username && user.password===password})
   console.log(this.user)
     if(this.user===undefined){
     alert("User Does not exist, create a account")
     }else {
      this.isLoggedIn = true 
     
     }
    }

  logout(){
    this.isLoggedIn = false
  }
}
