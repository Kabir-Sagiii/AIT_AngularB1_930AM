import { Component,OnDestroy,inject } from '@angular/core';
import { ContactusSService } from 'src/app/services/contactus-s.service';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent  {

   contactusservice= inject(ContactusSService)
  
   submitQuery(){
this.contactusservice.submitted = true 
this.contactusservice.username=""
this.contactusservice.email=""
this.contactusservice.query=""
   }

}
