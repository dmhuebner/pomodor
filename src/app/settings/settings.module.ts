import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './containers/settings-container/settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SettingsFormComponent } from './components/settings-form/settings-form.component';
import { PmFormsModule } from '@shared/forms';

@NgModule({
  declarations: [SettingsComponent, SettingsFormComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    NgxSpinnerModule,
    PmFormsModule
  ]
})
export class SettingsModule { }
