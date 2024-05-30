import { Component,inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { DialogCompComponent } from '../dialog-comp/dialog-comp.component';

@Component({
  selector: 'app-material-comps',
  templateUrl: './material-comps.component.html',
  styleUrls: ['./material-comps.component.css']
})
export class MaterialCompsComponent {

   constructor(private matdialog:MatDialog){

   }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string):void{
  this.matdialog.open(DialogCompComponent,{enterAnimationDuration,exitAnimationDuration})
  }

}
