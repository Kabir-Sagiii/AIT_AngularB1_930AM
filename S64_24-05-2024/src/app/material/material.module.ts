import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';

const allmodules = [
  MatTabsModule,
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatStepperModule,
  MatMenuModule
]

@NgModule({
  
  imports: [
    CommonModule,
    allmodules
  ],
  exports:[ allmodules ]
})
export class MaterialModule { }
