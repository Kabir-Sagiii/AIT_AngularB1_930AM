import { Component,inject } from '@angular/core';
import { GithubuserService } from '../service/githubuser.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  githubuserS:GithubuserService= inject(GithubuserService)
    

}
