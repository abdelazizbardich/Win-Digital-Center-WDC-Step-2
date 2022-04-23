import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { ActivitiesAllComponent } from './activities/activities-all/activities-all.component';
import { ActivitiesAddComponent } from './activities/activities-add/activities-add.component';
import { ActivitiesUpdateComponent } from './activities/activities-update/activities-update.component';
import { ActivitiesParticipateComponent } from './activities/activities-participate/activities-participate.component';
import { AdminsAllComponent } from './admin/admins-all/admins-all.component';
import { AdminsAddComponent } from './admin/admins-add/admins-add.component';
import { AdminsUpdateComponent } from './admin/admins-update/admins-update.component';
import { AttendanceAllComponent } from './attendance/attendance-all/attendance-all.component';
import { AttendanceAddComponent } from './attendance/attendance-add/attendance-add.component';
import { AttendanceUpdateComponent } from './attendance/attendance-update/attendance-update.component';
import { ExerciseAllComponent } from './exercise/exercise-all/exercise-all.component';
import { ExerciseAddComponent } from './exercise/exercise-add/exercise-add.component';
import { ExerciseUpdateComponent } from './exercise/exercise-update/exercise-update.component';
import { ParticipantAllComponent } from './participant/participant-all/participant-all.component';
import { ParticipantUpdateComponent } from './participant/participant-update/participant-update.component';
import { ParticipantAddComponent } from './participant/participant-add/participant-add.component';
import { ResponsibleAllComponent } from './responsible/responsible-all/responsible-all.component';
import { ResponsibleAddComponent } from './responsible/responsible-add/responsible-add.component';
import { ResponsibleUpdateComponent } from './responsible/responsible-update/responsible-update.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
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
    ResponsibleUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
