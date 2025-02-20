import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { WebcamComponent } from './components/webcam/webcam.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminPaneauComponent } from './components/admin-paneau/admin-paneau.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeesPointageComponent } from './components/employees-pointage/employees-pointage.component';
import { CongeComponent } from './components/conge/conge.component';
import { SalairesComponent } from './components/salaires/salaires.component';

@NgModule({
  declarations: [
    AppComponent,
    WebcamComponent,
    DashboardComponent,
    AdminPaneauComponent,
    EmployeesComponent,
    EmployeesPointageComponent,
    CongeComponent,
    SalairesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
