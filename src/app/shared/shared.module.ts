import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModules } from './materials.module';
import {ReactiveFormsModule} from "@angular/forms";





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialsModules,
    ReactiveFormsModule
  ],
  exports: [
    MaterialsModules,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
