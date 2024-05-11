import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TDFormComponent {
    username = "";
    password = "";
    email="";
    gender=""

    getUsersData(formReference:NgForm){
      console.log(formReference)
       this.username=  formReference.value.username
       this.password = formReference.value.password
       this.email = formReference.value.email 
       this.gender = formReference.value.gender

    //    formReference.reset()

    //    formReference.setValue({
    //     username:"sagar",
    //     password:"*****",
    //     email:"dummy@gmail.com",
    //     gender:"male"
    // })
       
    }
        resetDefaultValue(mytdform:NgForm){
            // console.log(mytdform)

            //readonly Property
            // mytdform.controls['username'].value = "abcs"

          
            console.log(mytdform)
           

            mytdform.setValue({
                username:"sagar",
                password:"",
                email:"",
                gender:""
            })

            mytdform.value.username = "abc"

            
        }

        resetOnlyUserNameGender(mytdform:NgForm){
          mytdform.reset()

            mytdform.form.patchValue({
                username:"Dummy",
                gender:"other"
            })
        }
}
