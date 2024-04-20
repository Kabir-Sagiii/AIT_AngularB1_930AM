import { Component,inject } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-usersdetails',
  templateUrl: './usersdetails.component.html',
  styleUrls: ['./usersdetails.component.css']
})
export class UsersdetailsComponent {
  
  usersdata:any = []
       users:UsersService= inject(UsersService)
 
    constructor(private httpclient:HttpClient){

    }

  getUsers(){
this.httpclient.get("http://localhost:3000/results").subscribe({
       next : (data:any)=>{
         console.log(data)
         this.usersdata = data
       },
       error:(errormsg:any)=>{
           alert("Something Went Wrong, Try again")
           console.log(errormsg)
       }
      })
  
  }

  removeUser(id:any){
       this.httpclient.delete(`http://localhost:3000/results/${id}`).subscribe({
          next:(data)=>{
            alert("Deleted User Successfully")
            console.log(data)
            this.getUsers()
          },
          error:()=>{
            alert("Error while removing User")
          }
       })
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
