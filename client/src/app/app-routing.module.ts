import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Routes components
  // Auth
    import { LoginComponent } from './pages/auth/login/login.component'; // login
    import { ActivitiesComponent } from './pages/activities/activities.component'; // activities
    import { AdminsComponent } from './pages/admin/admins.component'; // admin
    import { AttendanceComponent } from './pages/attendance/attendance.component'; // Attendance
    import { ExerciseComponent } from './pages/exercise/exercise.component'; // Exercise
    import { ParticipantComponent } from './pages/participant/participant.component'; // Participant
    import { ResponsibleComponent } from './pages/responsible/responsible.component'; // Responsible
    import { DashboardComponent } from './pages/dashboard/dashboard.component'; // Dashboard
  // home
    import { HomeComponent } from './pages/home/home.component';
const routes: Routes = [
  // Auth
    {path:"",component: HomeComponent},
    {path:"login",component: LoginComponent},
    {path:"dashboard",component:DashboardComponent,children: [
        {path:"activities",component:ActivitiesComponent}, // activities
        {path:"admin",component: AdminsComponent}, // Admin
        {path:"attendance", component: AttendanceComponent}, // Attendance
        {path:"exercise", component: ExerciseComponent}, // Exercise
        {path:"participant", component: ParticipantComponent}, // Participant
        {path:"responsible", component: ResponsibleComponent} // Responsible
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
