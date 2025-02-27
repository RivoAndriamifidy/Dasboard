import { Component } from '@angular/core';

@Component({
  selector: 'app-user-space',
  standalone: false,
  
  templateUrl: './user-space.component.html',
  styleUrl: './user-space.component.css'
})
export class UserSpaceComponent {

  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    position: 'Développeur'
  };

  absences = [
    { date: '2024-02-10', reason: 'Maladie', status: 'Approuvé' },
    { date: '2024-03-15', reason: 'Vacances', status: 'Refusé' },
    { date: '2024-04-01', reason: 'Congé personnel', status: 'En attente' }
  ];

  salaires = [
    { mois: 'Janvier 2024', montant: 2000, avance: 200, retard: 50 },
    { mois: 'Février 2024', montant: 2000, avance: 300, retard: 100 },
    { mois: 'Mars 2024', montant: 2000, avance: 0, retard: 0 }
  ];

  constructor() {}

  ngOnInit(): void {}
}
