import { Component } from '@angular/core';
import { MyService } from './Services-Concept/Services/myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MyService]
})


export class AppComponent {
  title = 'My first title in App Component';
  constructor(public myFirstService:MyService){

  }
}
