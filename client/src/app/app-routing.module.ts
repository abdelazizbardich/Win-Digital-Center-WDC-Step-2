import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Routes components
  // activities
    import { ActivitiesAllComponent } from './activities/activities-all/activities-all.component';
    import { ActivitiesAddComponent } from './activities/activities-add/activities-add.component';
    import { ActivitiesUpdateComponent } from './activities/activities-update/activities-update.component';
    import { ActivitiesParticipateComponent } from './activities/activities-participate/activities-participate.component';
  // admin
    import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
    import { AdminsAllComponent } from './admin/admins-all/admins-all.component';
    import { AdminsAddComponent } from './admin/admins-add/admins-add.component';
    import { AdminsUpdateComponent } from './admin/admins-update/admins-update.component';
  // Attendance
    import { AttendanceAllComponent } from './attendance/attendance-all/attendance-all.component';
    import { AttendanceAddComponent } from './attendance/attendance-add/attendance-add.component';
    import { AttendanceUpdateComponent } from './attendance/attendance-update/attendance-update.component';
  // Exercise
    import { ExerciseAllComponent } from './exercise/exercise-all/exercise-all.component';
    import { ExerciseAddComponent } from './exercise/exercise-add/exercise-add.component';
    import { ExerciseUpdateComponent } from './exercise/exercise-update/exercise-update.component';
  // Participant
    import { ParticipantAllComponent } from './participant/participant-all/participant-all.component';
    import { ParticipantAddComponent } from './participant/participant-add/participant-add.component';
    import { ParticipantUpdateComponent } from './participant/participant-update/participant-update.component';
  // Responsible
    import { ResponsibleAllComponent } from './responsible/responsible-all/responsible-all.component';
    import { ResponsibleAddComponent } from './responsible/responsible-add/responsible-add.component';
    import { ResponsibleUpdateComponent } from './responsible/responsible-update/responsible-update.component';

const routes: Routes = [
  // activities
    {path:"activities",component:ActivitiesAllComponent},
    {path:"activities/add",component:ActivitiesAddComponent},
    {path:"activities/update",component:ActivitiesUpdateComponent},
    {path:"activities/participate",component:ActivitiesParticipateComponent},
  // Admin
    {path:"admin/login", component:AdminLoginComponent},
    {path:"admin",component: AdminsAllComponent},
    {path:"admin/add",component: AdminsAddComponent},
    {path:"admin/update",component: AdminsUpdateComponent},
  // Attendance
    {path:"attendance", component: AttendanceAllComponent},
    {path:"attendance/add", component: AttendanceAddComponent},
    {path:"attendance/update", component: AttendanceUpdateComponent},
  // Exercise
    {path:"exercise", component: ExerciseAllComponent},
    {path:"exercise/add", component: ExerciseAddComponent},
    {path:"exercise/update", component: ExerciseUpdateComponent},
  // Participant
    {path:"participant", component: ParticipantAllComponent},
    {path:"participant/add", component: ParticipantAddComponent},
    {path:"participant/update", component: ParticipantUpdateComponent},
  // Responsible
    {path:"responsible", component: ResponsibleAllComponent},
    {path:"responsible/add", component: ResponsibleAddComponent},
    {path:"responsible/update", component: ResponsibleUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
