import { Component } from '@angular/core';
import { MyService } from '../Services-Concept/Services/myservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public myFirstService:MyService){

  }
}
