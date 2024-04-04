import { Component } from '@angular/core';
import { DBService } from 'src/app/services/db.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent {
  s1:any
  getf1Functionality(){
      this.s1    = new DBService('hhhh')
      this.s1.f1()
  }
}
