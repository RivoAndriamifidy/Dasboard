import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WebcamComponent } from './components/webcam/webcam.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {path: 'webcam', component: WebcamComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
