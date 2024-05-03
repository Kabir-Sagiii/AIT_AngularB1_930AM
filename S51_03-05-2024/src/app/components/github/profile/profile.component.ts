import { Component } from '@angular/core';
import { GithubuserService } from '../service/githubuser.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
 constructor(protected githubusers:GithubuserService){

 }
}
