import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisteredusersService {
 username:string = ""
 email:string = ""
 query:string =""
 submitted:boolean = false

  registeredUsers :any = [
    {username:"abc",password:"abc@123"},
    {username:"xyz",password:"xyz@123"},
    {username:"admin",password:"admin@123"}
  ]

  constructor() { }
}
