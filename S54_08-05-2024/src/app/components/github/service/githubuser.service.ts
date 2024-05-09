import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUserDetails } from '../types/userdetails';

@Injectable({
  providedIn: 'root'
})
export class GithubuserService {
 userdetails:any = null  // Avoid this Part

 // Use this following approach
// userdetails:IUserDetails ={
  //    login:"",
  //    id:0,
  //    node_id:""
    
  // }

  constructor(private httpclient:HttpClient) { }
  
  getUserGithubDetails(username:string){
   
      this.httpclient.get(`https://api.github.com/users/${username}`).subscribe({
        next:(userdata)=>{
             console.log(userdata)
             this.userdetails = userdata //{----}
        },
        error:(errordata)=>{
          alert("Something Went Wrong")
        }
      })
  }

}
