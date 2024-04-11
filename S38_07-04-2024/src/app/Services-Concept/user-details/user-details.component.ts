import { Component } from '@angular/core';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
 
})
export class UserDetailsComponent {
  
  usersdata:string[] =[]
  constructor(private usersservice:UsersService){
     this.usersdata = this.usersservice.users
  }
}
