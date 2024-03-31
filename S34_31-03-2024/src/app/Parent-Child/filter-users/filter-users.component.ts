import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-users',
  templateUrl: './filter-users.component.html',
  styleUrls: ['./filter-users.component.css']
})
export class FilterUsersComponent {
   @Input()
  totalUsersCount:number = 0
  @Input()
  maleUsersCount:number = 0
  @Input()
  femaleUsersCount:number = 0

    @Output()
    radioSelectedEvent = new EventEmitter()


  selectedUserType(typeValue:string):void{
     this.radioSelectedEvent.emit(typeValue)
  }

}
