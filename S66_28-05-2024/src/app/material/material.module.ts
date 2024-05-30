import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';

const allmodules = [
 
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatTabsModule,
  MatStepperModule,
  MatIconModule,
  MatMenuModule,
  MatDialogModule
]

@NgModule({
  
  imports: [
    CommonModule,
    allmodules
  ],
  exports:[ allmodules ]
})
export class MaterialModule { }
