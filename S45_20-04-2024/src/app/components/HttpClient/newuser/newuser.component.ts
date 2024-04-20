import { Component,inject } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent {

  cities:any = ["Select the City","Mumbai","Pune","Hyderabad","Delhi","Banglore","Chennai","Indore"]
  
  

       httpClient:HttpClient = inject(HttpClient)
       users:UsersService  = inject(UsersService)
      
       userAction(){
         if(this.users.btnTitle === "Add User"){
              this.newUserData()
         }else{
   this.updateUserData()
         }
       }

   newUserData(){
   
    var userdata = {
        name:this.users.username,
        city:this.users.city
    }
    this.httpClient.post("http://localhost:3000/results",userdata).subscribe({
      next:(data)=>{
        alert("User Registered")
       
       
        this.users.username=""
        this.users.city = this.cities[0]
      },
      error:(error)=>{
        console.log(error)
        alert("Something went Wrong will Registering User")
      }
    })
   }

    updateUserData(){
      var updatedData = {
        name:this.users.username,
        city:this.users.city
      }
       this.httpClient.put(`http://localhost:3000/results/${this.users.userid}`,updatedData).subscribe({
        next:()=>{alert("updated user")

        this.users.title = "New User Information"
        this.users.btnTitle = "Add User"
        this.users.titleStyle = true
        this.users.city = ""
        this.users.username = ""
        

        },
        error:()=>{alert("error while updating user")}
       })
    }

}
