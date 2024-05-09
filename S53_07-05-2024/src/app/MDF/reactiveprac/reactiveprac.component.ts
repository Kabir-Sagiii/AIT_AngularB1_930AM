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
         skills:new FormArray([
          new FormControl(null),
          new FormControl(null),
          
         ])
     })
  }
removeC(index:number){
 this.skillss.splice(index,1)
}
  addC(){
    this.skillss.push(new FormControl())
  }

  resetV(){
     this.myreactiveform.reset({
       username:"dc",
       password:"cd",
       
       
      

     })
  }
  patchV(){
this.myreactiveform.patchValue({
  email:"Saga@gmail.com",
  skills:["hello"]
})
  }

  get skillss(){
    return (this.myreactiveform.get('skills') as FormArray).controls
  }

  getUserDetails(){
     console.log(this.myreactiveform)
  }
}
