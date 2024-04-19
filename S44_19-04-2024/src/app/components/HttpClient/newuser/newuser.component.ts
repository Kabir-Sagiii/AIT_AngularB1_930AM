import { Component,inject } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent {

  cities:any = ["Select the City","Mumbai","Pune","Hyderabad","Delhi","Banglore","Chennai","Indore"]
   username:string =""
   city:string =""

       httpClient:HttpClient = inject(HttpClient)

   newUserData(){
    console.log(this.username,this.city)
    var userdata = {
        name:this.username,
        city:this.city
    }
    this.httpClient.post("http://localhost:3000/results",userdata).subscribe({
      next:(data)=>{
        alert("User Registered")
        //getrequest
        console.log(data)
      },
      error:(error)=>{
        console.log(error)
        alert("Something went Wrong will Registering User")
      }
    })
   }

}
