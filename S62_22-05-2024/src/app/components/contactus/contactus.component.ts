import { Component,OnDestroy,inject } from '@angular/core';
import { RegisteredusersService } from 'src/app/services/registeredusers.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnDestroy {
  
registereduser= inject(RegisteredusersService)
submitQuery(){
  this.registereduser.submitted = true
}
ngOnDestroy(): void {
  this.registereduser.submitted = false 
  this.registereduser.username=""
  this.registereduser.email =""
  this.registereduser.query=""
}
}
