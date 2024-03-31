import { Component } from '@angular/core';
import { DBService } from 'src/app/services/db.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent {
  s1:any
  getF1Functionality(){
        this.s1  = new DBService('hhh')
        this.s1.f1()
  }
}
