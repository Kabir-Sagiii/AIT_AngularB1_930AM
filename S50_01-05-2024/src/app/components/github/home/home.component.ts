import { Component } from '@angular/core';
import { GithubuserService } from '../service/githubuser.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(protected githubuserS:GithubuserService){

  }

}
