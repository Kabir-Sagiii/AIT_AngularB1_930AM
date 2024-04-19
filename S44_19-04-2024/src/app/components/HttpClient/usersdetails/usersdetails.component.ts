import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-usersdetails',
  templateUrl: './usersdetails.component.html',
  styleUrls: ['./usersdetails.component.css']
})
export class UsersdetailsComponent {
  
  usersdata:any = []
 
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

}
