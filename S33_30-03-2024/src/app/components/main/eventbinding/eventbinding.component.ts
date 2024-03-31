import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent {
   
  templateData:string=""

  getInputData(event:any):void{
this.templateData = event.target.value
  }


}
