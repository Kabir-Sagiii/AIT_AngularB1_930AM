import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TDFormComponent {

    getUsersData(formReference:NgForm){
      //  console.log(formReference.controls['username'].value)

      //  console.log(formReference.value.username)

      console.log(formReference)
       
      console.log(formReference.value)

    }
}
