import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ActivitiesComponent } from './pages/activities/activities.component';
import { AdminsComponent } from './pages/admin/admins.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { ExerciseComponent } from './pages/exercise/exercise.component';
import { ParticipantComponent } from './pages/participant/participant.component';
import { ResponsibleComponent } from './pages/responsible/responsible.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ActivitiesComponent,
    AdminsComponent,
    AttendanceComponent,
    ExerciseComponent,
    ParticipantComponent,
    ResponsibleComponent,
    LoginComponent,
    SideBarComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
