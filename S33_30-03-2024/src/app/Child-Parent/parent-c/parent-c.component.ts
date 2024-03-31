import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-c',
  templateUrl: './parent-c.component.html',
  styleUrls: ['./parent-c.component.css']
})
export class ParentCComponent {
 childData:string = ""
  getData(childata:string){
    this.childData = childata
  }

}
