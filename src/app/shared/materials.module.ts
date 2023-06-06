import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTreeModule} from '@angular/material/tree';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
    
    exports:[
        MatButtonModule,
        MatToolbarModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        MatListModule,
        MatDialogModule,
        MatCardModule,
        MatStepperModule,
        MatSidenavModule,
        MatTreeModule,
        MatMenuModule
    ]
    
})
export class MaterialsModules {
    constructor() {
        
    }

    
}