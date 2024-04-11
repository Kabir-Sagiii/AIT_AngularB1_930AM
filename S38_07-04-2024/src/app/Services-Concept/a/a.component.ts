import { Component } from '@angular/core';
import { MyService } from '../Services/myservice.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css'],
  // providers:[MyService]
})
export class AComponent {


  constructor(private myFirstService:MyService){

  }

       getF1(){
          this.myFirstService.printCityName()
       }
       changeCity(cityName:string){ //pune
        this.myFirstService.changeCity(cityName) //pune
     }

}
