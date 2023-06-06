import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModules } from './materials.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialsModules
  ],
  exports: [
    MaterialsModules
  ]
})
export class SharedModule { }
