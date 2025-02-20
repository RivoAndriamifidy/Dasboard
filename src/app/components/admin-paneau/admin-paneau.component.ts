import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);
@Component({
  selector: 'app-admin-paneau',
  standalone: false,
  
  templateUrl: './admin-paneau.component.html',
  styleUrl: './admin-paneau.component.css'
})
export class AdminPaneauComponent {

  ngAfterViewInit() {
    this.createPointageChart();
    this.createSalaireChart();
  }

  createPointageChart() {
    new Chart('pointageChart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
        datasets: [{
          label: 'Nombre de pointages',
          data: [20, 35, 40, 50, 45, 55],
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true }
        },
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }

  createSalaireChart() {
    new Chart('salaireChart', {
      type: 'bar',
      data: {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
        datasets: [{
          label: 'Salaires en €',
          data: [2500, 2600, 2700, 2800, 2900, 3000],
          backgroundColor: ['#4CAF50', '#2196F3', '#FFC107', '#FF5722', '#9C27B0', '#E91E63'],
          borderColor: '#333',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true }
        },
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }
}
