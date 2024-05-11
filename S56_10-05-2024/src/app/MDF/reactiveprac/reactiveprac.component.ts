import { Component } from '@angular/core';
import {FormGroup,FormControl, Validators, FormArray} from '@angular/forms'

@Component({
  selector: 'app-reactiveprac',
  templateUrl: './reactiveprac.component.html',
  styleUrls: ['./reactiveprac.component.css']
})
export class ReactivepracComponent {
  data = ["a","b"]
  myreactiveform:FormGroup
  constructor(){
     this.myreactiveform  = new FormGroup({
          username : new FormControl(null,[Validators.required,Validators.minLength(5)]),
          password : new FormControl(null),
          email : new FormControl(null),
          address:new FormGroup({
            city:new FormControl("Indore"),
            state:new FormControl("MP")
          }),
          skills : new FormArray([
             new FormControl(""),
             new FormControl(),
             new FormControl(),
          ])
     })
  }

  getUserDetails(){
     console.log(this.myreactiveform)
  }
}
