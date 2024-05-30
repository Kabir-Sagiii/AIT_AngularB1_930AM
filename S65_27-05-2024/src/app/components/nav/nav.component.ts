import { Component,inject } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  
auth=inject(AuthService)
router  =inject(Router)

    logoutUser(){
 this.auth.logout()
 this.router.navigateByUrl("/login")
    }
}
