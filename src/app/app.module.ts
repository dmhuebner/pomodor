import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AuthService } from './shared/services/auth/auth.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { TimerModule } from './timer/timer.module';
import { HttpClientModule } from '@angular/common/http';
import { SettingsModule } from './settings/settings.module';
import { TaskModule } from './task/task.module';
import { TimerService } from './shared/services/timer/timer.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SettingsService } from './shared/services/settings/settings.service';
import { TaskService } from './shared/services/task/task.service';
import { ToastrModule } from 'ngx-toastr';
import { LoggedInGuard } from './shared/guards/logged-in.guard';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment .firebase, 'pomodor'),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    LayoutModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    SharedModule,
    TimerModule,
    TaskModule,
    SettingsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    AuthService,
    TimerService,
    SettingsService,
    TaskService,
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
