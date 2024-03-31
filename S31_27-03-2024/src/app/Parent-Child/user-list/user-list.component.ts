import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users:any = []
getUsers(){
   fetch("https://randomuser.me/api/?results=51")
   .then((res)=>res.json())
   .then((data)=>{
this.users = data.results
   }).catch((error)=>{
alert("Something Went Wrong")
   })
}
}
