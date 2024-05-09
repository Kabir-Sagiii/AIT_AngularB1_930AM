import { Component } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-reactive-fc',
  templateUrl: './reactive-fc.component.html',
  styleUrls: ['./reactive-fc.component.css']
})
export class ReactiveFCComponent {

  myreactiveform:FormGroup
    constructor(){
       this.myreactiveform  = new FormGroup({
            username : new FormControl(null,[Validators.required,Validators.minLength(5)]),
            password : new FormControl(null,Validators.required),
            email : new FormControl(null,[Validators.required,Validators.email])
       })
    }

    getUserDetails(){
       console.log(this.myreactiveform)
    }

}
