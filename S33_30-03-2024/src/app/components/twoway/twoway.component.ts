import { Component } from '@angular/core';

@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.css']
})
export class TwowayComponent {
     data:string = "Default Data"
     
     getData(event:any){
     
      this.data = event.target.value
     }

     updateData(){
       this.data = "New Data"
     }
}
