import { Component } from '@angular/core';
import {FormGroup,FormControl, Validators, FormArray} from '@angular/forms'

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
            email : new FormControl(null,[Validators.required,Validators.email]),
            address : new FormGroup({
                 city: new FormControl("Select City"),
                 state: new FormControl("Select State"),
                //  x : new FormGroup({
                //    x1:new FormControl()
                //  })

            }),
            skills : new FormArray([
              new FormControl(),
             
              
            ])
       })
    }

    getUserDetails(){
       console.log(this.myreactiveform)
       console.log(this.myreactiveform.get('username')?.value)
       console.log(this.myreactiveform.get('address.city')?.value)

       //implement code to print values of checkboxes
    }

       get accessSkills(){
         return (this.myreactiveform.get('skills') as FormArray)?.controls
       }
       addSkillControl(){
         this.accessSkills.push(new FormControl())
       }

       removeControl(index:number){
        this.accessSkills.splice(index,1)
       }

       resetAllControls(){
        // this.myreactiveform.reset({
        //    username:"",
        //    password:"",
        //    email:"",
        //    address:{
        //     city:"Select City",
        //     state:"Select State"
        //    },
        //    skills:[""]

        // })
          this.myreactiveform.setValue({
            username:"Kabir",
            password:"123",
            email:"xyz@gmail.com",
            address:{
              state:"Select State",
              city:"Select City"
            },
            skills:[""]
          })
       }

       patchControlValues(){
        this.myreactiveform.patchValue({
            username:"Sagar",
            address:{
              city:"Pune"
            }
        })
       }

}
