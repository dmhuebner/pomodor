import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './components/settings-container/settings.component';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SettingsFormComponent } from './components/settings-form/settings-form.component';

@NgModule({
  declarations: [SettingsComponent, SettingsFormComponent],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    CommonModule,
    NgxSpinnerModule
  ]
})
export class SettingsModule { }
