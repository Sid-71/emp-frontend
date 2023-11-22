import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './gaurd/auth.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [
  {path:'employee',component : EmployeeComponent,canActivate:[AuthGuard]},
  {path : 'department', component : DepartmentComponent,canActivate:[AuthGuard]},
  {path : 'login', component : LoginComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'user-profile', component : UserProfileComponent,canActivate:[AuthGuard]},
  // {path : '',component :AppComponent ,canActivate : [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
