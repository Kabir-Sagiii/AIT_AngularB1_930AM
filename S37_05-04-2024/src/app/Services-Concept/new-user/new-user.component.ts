import { Component } from '@angular/core';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
  providers:[UsersService]
})
export class NewUserComponent {
  user:string=""
  constructor(private usersservice:UsersService){

  }

  adduser(){
      this.usersservice.addUsers(this.user)
  }

}
