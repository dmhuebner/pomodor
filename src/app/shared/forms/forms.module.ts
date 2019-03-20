import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { InputFieldComponent } from './fields/input-field/input-field.component';
import { RaisedButtonComponent } from './fields/raised-button/raised-button.component';

const DECLARATIONS: any[] = [
  InputFieldComponent,
  RaisedButtonComponent
];

const MATERIAL_MODULES: any = [
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule
];

@NgModule({
  declarations: DECLARATIONS,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ...MATERIAL_MODULES
  ],
  exports: DECLARATIONS
})
export class PmFormsModule { }
