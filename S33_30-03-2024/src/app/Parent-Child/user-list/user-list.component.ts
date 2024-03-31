import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users:any = []
  totalUsers:any= []
 
  totalNoOfUsersCount:number=0
  maleUsersCount:number = 0
  femaleUserCount:number = 0

getUsers(){
   fetch("https://randomuser.me/api/?results=200")
   .then((res)=>res.json())
   .then((data)=>{
      this.users = data.results
      this.totalUsers = data.results
      this.totalNoOfUsersCount = data.results.length
     this.femaleUserCount = data.results.filter((user:any)=>user.gender==="female").length
      this.maleUsersCount =  data.results.filter((user:any)=>user.gender==="male").length
   }).catch((error)=>{
alert("Something Went Wrong")
   })
}

selectedGenderType(genderType:string){

  if(genderType === "all"){
   this.users = this.totalUsers //male + female
  } else {
   this.users=  this.totalUsers.filter(function(element:any){
      return element.gender === genderType
     })
  }
   
}
}
