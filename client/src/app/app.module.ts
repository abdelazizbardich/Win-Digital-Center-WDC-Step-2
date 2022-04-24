import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ActivitiesAllComponent } from './pages/activities/activities-all/activities-all.component';
import { ActivitiesAddComponent } from './pages/activities/activities-add/activities-add.component';
import { ActivitiesUpdateComponent } from './pages/activities/activities-update/activities-update.component';
import { ActivitiesParticipateComponent } from './pages/activities/activities-participate/activities-participate.component';
import { AdminsAllComponent } from './pages/admin/admins-all/admins-all.component';
import { AdminsAddComponent } from './pages/admin/admins-add/admins-add.component';
import { AdminsUpdateComponent } from './pages/admin/admins-update/admins-update.component';
import { AttendanceAllComponent } from './pages/attendance/attendance-all/attendance-all.component';
import { AttendanceAddComponent } from './pages/attendance/attendance-add/attendance-add.component';
import { AttendanceUpdateComponent } from './pages/attendance/attendance-update/attendance-update.component';
import { ExerciseAllComponent } from './pages/exercise/exercise-all/exercise-all.component';
import { ExerciseAddComponent } from './pages/exercise/exercise-add/exercise-add.component';
import { ExerciseUpdateComponent } from './pages/exercise/exercise-update/exercise-update.component';
import { ParticipantAllComponent } from './pages/participant/participant-all/participant-all.component';
import { ParticipantUpdateComponent } from './pages/participant/participant-update/participant-update.component';
import { ParticipantAddComponent } from './pages/participant/participant-add/participant-add.component';
import { ResponsibleAllComponent } from './pages/responsible/responsible-all/responsible-all.component';
import { ResponsibleAddComponent } from './pages/responsible/responsible-add/responsible-add.component';
import { ResponsibleUpdateComponent } from './pages/responsible/responsible-update/responsible-update.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivitiesAllComponent,
    ActivitiesAddComponent,
    ActivitiesUpdateComponent,
    ActivitiesParticipateComponent,
    AdminsAllComponent,
    AdminsAddComponent,
    AdminsUpdateComponent,
    AttendanceAllComponent,
    AttendanceAddComponent,
    AttendanceUpdateComponent,
    ExerciseAllComponent,
    ExerciseAddComponent,
    ExerciseUpdateComponent,
    ParticipantAllComponent,
    ParticipantUpdateComponent,
    ParticipantAddComponent,
    ResponsibleAllComponent,
    ResponsibleAddComponent,
    ResponsibleUpdateComponent,
    LoginComponent,
    SideBarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
