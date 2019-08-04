import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InputFieldComponent } from './fields/input-field/input-field.component';
import { RaisedButtonComponent } from './fields/raised-button/raised-button.component';
import { CheckboxFieldComponent } from '@shared/forms/fields/checkbox-field/checkbox-field.component';
import { FabComponent } from '@shared/forms/fields/fab/fab.component';

const DECLARATIONS: any[] = [
  InputFieldComponent,
  RaisedButtonComponent,
  FabComponent,
  CheckboxFieldComponent
];

const MATERIAL_MODULES: any = [
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatCheckboxModule
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
