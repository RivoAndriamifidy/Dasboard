import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WebcamComponent } from './components/webcam/webcam.component';
import { AdminPaneauComponent } from './components/admin-paneau/admin-paneau.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeesPointageComponent } from './components/employees-pointage/employees-pointage.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {path: 'webcam', component: WebcamComponent},
  {path: 'dashboard/admin-panneau', component: AdminPaneauComponent},
  {path: 'dashboard/employees', component: EmployeesComponent},
  {path: 'dashboard/emplyees-pointage', component: EmployeesPointageComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
