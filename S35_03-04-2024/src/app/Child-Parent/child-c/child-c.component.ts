import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-c',
  templateUrl: './child-c.component.html',
  styleUrls: ['./child-c.component.css']
})
export class ChildCComponent {
  childData:string=""
  //Custom Event
     @Output()
     myFirstEvent = new EventEmitter()
  
     triggerEvent(){
      //Implemented logic to trigger my custom event
       this.myFirstEvent.emit(this.childData)
     }
}
