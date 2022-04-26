import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ActivitiesComponent } from './pages/activities/activities.component';
import { AdminsAllComponent } from './pages/admin/admins-all/admins-all.component';
import { AdminsAddComponent } from './pages/admin/admins-add/admins-add.component';
import { AdminsUpdateComponent } from './pages/admin/admins-update/admins-update.component';
import { AttendanceAllComponent } from './pages/attendance/attendance-all/attendance-all.component';
import { AttendanceAddComponent } from './pages/attendance/attendance-add/attendance-add.component';
import { AttendanceUpdateComponent } from './pages/attendance/attendance-update/attendance-update.component';
import { ExerciseComponent } from './pages/exercise/exercise.component';
import { ParticipantAllComponent } from './pages/participant/participant-all/participant-all.component';
import { ParticipantUpdateComponent } from './pages/participant/participant-update/participant-update.component';
import { ParticipantAddComponent } from './pages/participant/participant-add/participant-add.component';
import { ResponsibleAllComponent } from './pages/responsible/responsible-all/responsible-all.component';
import { ResponsibleAddComponent } from './pages/responsible/responsible-add/responsible-add.component';
import { ResponsibleUpdateComponent } from './pages/responsible/responsible-update/responsible-update.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ActivitiesComponent,
    AdminsAllComponent,
    AdminsAddComponent,
    AdminsUpdateComponent,
    AttendanceAllComponent,
    AttendanceAddComponent,
    AttendanceUpdateComponent,
    ExerciseComponent,
    ParticipantAllComponent,
    ParticipantUpdateComponent,
    ParticipantAddComponent,
    ResponsibleAllComponent,
    ResponsibleAddComponent,
    ResponsibleUpdateComponent,
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
