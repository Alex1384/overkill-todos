import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatIconModule,
  MatCheckboxModule,
  MatListModule
} from '@angular/material';


const MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatIconModule,
  MatCheckboxModule,
  MatListModule
  
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class MaterialModule {}