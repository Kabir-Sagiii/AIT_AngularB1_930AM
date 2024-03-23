import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent {
 containerValue:string = ""

 changeTech(event:any):void {
   this.containerValue = event.target.value
 }
}
