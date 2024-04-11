import { Component } from '@angular/core';
import { MyService } from '../Services/myservice.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  // providers:[MyService]
})
export class MainComponent {
  constructor(public myFirstervice:MyService){

  }

}
