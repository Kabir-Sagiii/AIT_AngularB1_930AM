import { Component } from '@angular/core';
import { MyService } from 'src/app/Services-Concept/Services/myservice.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
  
})
export class HeaderComponent {
  constructor(public myFirstService:MyService){

  }
  printCity(){
    this.myFirstService.printCityName()
  }

}
