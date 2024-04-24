import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  cities:any = ["Select the City","Mumbai","Pune","Hyderabad","Delhi","Banglore","Chennai","Indore"]
  title:string="New User Information"
  btnTitle:string = "Add User"
  titleStyle:boolean = true 
  username:string = ""
  city:string=this.cities[0]
  userid:any;
  usersdata:any = []
  

  constructor(private httpClient:HttpClient) { }

  newUserData(){
   
    var userdata = {
        name:this.username,
        city:this.city
    }
    this.httpClient.post("http://localhost:3000/results",userdata).subscribe({
      next:(data)=>{
      
       
       
        this.username=""
        this.city = this.cities[0]
        this.getAllUsersData()
      },
      error:(error)=>{
        console.log(error)
        alert("Something went Wrong will Registering User")
      }
    })
   }

   getAllUsersData(){
    this.httpClient.get("http://localhost:3000/results").subscribe({
       next : (data:any)=>{
        
         this.usersdata = data
       },
       error:(errormsg:any)=>{
           alert("Something Went Wrong, Try again")
           console.log(errormsg)
       }
      })
   }

   removeOneUser(id:any){
    this.httpClient.delete(`http://localhost:3000/results/${id}`).subscribe({
      next:(data)=>{
        alert("Deleted User Successfully")
       
        this.getAllUsersData()
      },
      error:()=>{
        alert("Error while removing User")
      }
   })
   }

   updateUserData(){
    var updatedData = {
      name:this.username,
      city:this.city
    }
     this.httpClient.put(`http://localhost:3000/results/${this.userid}`,updatedData).subscribe({
      next:()=>{
      

        this.getAllUsersData()

      this.title = "New User Information"
      this.btnTitle = "Add User"
      this.titleStyle = true
      this.city = this.cities[0]
      this.username = ""
      

      },
      error:()=>{alert("error while updating user")}
     })
  }
}
