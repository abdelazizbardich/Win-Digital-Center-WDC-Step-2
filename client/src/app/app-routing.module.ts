import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Routes components
  // Auth
    import { LoginComponent } from './pages/auth/login/login.component';
  // activities
    import { ActivitiesComponent } from './pages/activities/activities.component';
  // admin
    import { AdminsAllComponent } from './pages/admin/admins-all/admins-all.component';
    import { AdminsAddComponent } from './pages/admin/admins-add/admins-add.component';
    import { AdminsUpdateComponent } from './pages/admin/admins-update/admins-update.component';
  // Attendance
    import { AttendanceAllComponent } from './pages/attendance/attendance-all/attendance-all.component';
    import { AttendanceAddComponent } from './pages/attendance/attendance-add/attendance-add.component';
    import { AttendanceUpdateComponent } from './pages/attendance/attendance-update/attendance-update.component';
  // Exercise
    import { ExerciseComponent } from './pages/exercise/exercise.component';
  // Participant
    import { ParticipantAllComponent } from './pages/participant/participant-all/participant-all.component';
    import { ParticipantAddComponent } from './pages/participant/participant-add/participant-add.component';
    import { ParticipantUpdateComponent } from './pages/participant/participant-update/participant-update.component';
  // Responsible
    import { ResponsibleAllComponent } from './pages/responsible/responsible-all/responsible-all.component';
    import { ResponsibleAddComponent } from './pages/responsible/responsible-add/responsible-add.component';
    import { ResponsibleUpdateComponent } from './pages/responsible/responsible-update/responsible-update.component';
    import { DashboardComponent } from './pages/dashboard/dashboard.component';
  // home
    import { HomeComponent } from './pages/home/home.component';
const routes: Routes = [
  // Auth
    {path:"",component: HomeComponent},
    {path:"login",component: LoginComponent},
    {path:"dashboard",component:DashboardComponent,children: [
      // activities
        {path:"activities",component:ActivitiesComponent},
      // Admin
        {path:"admin",component: AdminsAllComponent},
        {path:"admin/add",component: AdminsAddComponent},
        {path:"admin/update",component: AdminsUpdateComponent},
      // Attendance
        {path:"attendance", component: AttendanceAllComponent},
        {path:"attendance/add", component: AttendanceAddComponent},
        {path:"attendance/update", component: AttendanceUpdateComponent},
      // Exercise
        {path:"exercise", component: ExerciseComponent},
      // Participant
        {path:"participant", component: ParticipantAllComponent},
        {path:"participant/add", component: ParticipantAddComponent},
        {path:"participant/update", component: ParticipantUpdateComponent},
      // Responsible
        {path:"responsible", component: ResponsibleAllComponent},
        {path:"responsible/add", component: ResponsibleAddComponent},
        {path:"responsible/update", component: ResponsibleUpdateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
