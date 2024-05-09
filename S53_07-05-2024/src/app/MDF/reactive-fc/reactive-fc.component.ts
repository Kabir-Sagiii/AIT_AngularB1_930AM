import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'

@Component({
  selector: 'app-reactive-fc',
  templateUrl: './reactive-fc.component.html',
  styleUrls: ['./reactive-fc.component.css']
})
export class ReactiveFCComponent {

  myreactiveform:FormGroup
    constructor(){
       this.myreactiveform  = new FormGroup({
            username : new FormControl("Sagar"),
            password : new FormControl(null),
            email : new FormControl(null)
       })
    }

    getUserDetails(){
       console.log(this.myreactiveform)
    }

}
