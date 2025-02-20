import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: false
})
export class DashboardComponent {
  activePage = 'dashboard'; // Page par défaut

  setActive(page: string) {
    this.activePage = page;
  }
}
