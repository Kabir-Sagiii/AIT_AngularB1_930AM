import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-usersdetails',
  templateUrl: './usersdetails.component.html',
  styleUrls: ['./usersdetails.component.css']
})
export class UsersdetailsComponent {
  userObservable:any
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
  //  this.userObservable=
  //  this.httpclient.get("http://localhost:3000/results")

  //    this.userObservable.subscribe({
  //     next : (data:any)=>{
  //       console.log(data)
  //       this.usersdata = data
  //     },
  //     error:(errormsg:any)=>{
  //         alert("Something Went Wrong, Try again")
  //         console.log(errormsg)
  //     }
  //    })
   
   //  fetch("http://localhost:3000/result")
   //.then((data)=>{
      //    return data.json()
      //  }).then((res)=>{
      //   console.log(res)
      //  })
      //  .catch((error)=>{
      //   alert("Something went wrong")
      //  })//get request
  }

}
