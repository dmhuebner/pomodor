import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class SharedModule { }
