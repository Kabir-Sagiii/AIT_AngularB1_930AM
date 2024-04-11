import { Component } from '@angular/core';
import { MyService } from '../Services/myservice.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css'],
  // providers:[MyService]
})
export class BComponent {
   constructor(private myFirstService:MyService){

   }

  getF1(){
    this.myFirstService.printCityName()
}
   changeCity(cityName:string){
      this.myFirstService.changeCity(cityName)
   }

}
