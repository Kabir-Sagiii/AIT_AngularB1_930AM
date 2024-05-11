import { Component,inject } from '@angular/core';
import { GithubuserService } from '../service/githubuser.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  username:string=""

 githubuser:GithubuserService =  inject(GithubuserService)

 getUsersData(){
  
  this.githubuser.getUserGithubDetails(this.username)
 }

}
