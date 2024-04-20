import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  title:string="New User Information"
  btnTitle:string = "Add User"
  titleStyle:boolean = true 
  username:string = ""
  city:string=""
  userid:any;
  

  constructor() { }
}
