import { Component,inject } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-usersdetails',
  templateUrl: './usersdetails.component.html',
  styleUrls: ['./usersdetails.component.css']
})
export class UsersdetailsComponent {
  
  
       users:UsersService= inject(UsersService)
 
    constructor(private httpclient:HttpClient){

    }

  getUsers(){

      this.users.getAllUsersData()
  }

  removeUser(id:any){
        this.users.removeOneUser(id)
  }

   updateInfo(user:any){
    this.users.title = "Update Users Information"
    this.users.btnTitle = "Update User"
    this.users.titleStyle = false
    this.users.city = user.city
    this.users.username = user.name
    this.users.userid = user.id
   }

}
