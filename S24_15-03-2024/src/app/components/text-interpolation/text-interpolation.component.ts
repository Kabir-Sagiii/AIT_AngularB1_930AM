import { Component } from '@angular/core';

@Component({
  selector: 'app-text-interpolation',
  templateUrl: './text-interpolation.component.html',
  styleUrls: ['./text-interpolation.component.css']
})
export class TextInterpolationComponent {
  
     city:string = "Pune"
     price:number = 500;
     quantity:number = 5

     data = {
        name:"Anvesh Reddy",
        gender:"male"
     }

      changeName():string {
        return "Sid Verma"
      }

}
