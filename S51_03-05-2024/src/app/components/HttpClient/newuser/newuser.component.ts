import { Component,inject } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent {

  
  
  

       httpClient:HttpClient = inject(HttpClient)
       users:UsersService  = inject(UsersService)
      
       userAction(){
         if(this.users.btnTitle === "Add User"){
              this.users.newUserData()
         }else{
   this.users.updateUserData()
         }
       }

   

   

}
