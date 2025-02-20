import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  standalone: false,
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  activePage: string = 'employees';  // Page active pour l'affichage
  employees = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', position: 'Manager' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', position: 'Developer' },
    // Ajoute d'autres employés ici
  ];
  newEmployee = { name: '', email: '', position: '' };
  showAddModal = false;  // Pour afficher/masquer le modal d'ajout

  constructor() { }

  ngOnInit(): void {
    // Logique d'initialisation si nécessaire
  }

  // Afficher le modal pour ajouter un employé
  openAddEmployeeModal(): void {
    this.showAddModal = true;
  }

  // Fermer le modal pour ajouter un employé
  closeAddEmployeeModal(): void {
    this.showAddModal = false;
  }

  // Ajouter un employé à la liste
  addEmployee(): void {
    const newId = this.employees.length + 1;
    this.employees.push({ id: newId, ...this.newEmployee });
    this.newEmployee = { name: '', email: '', position: '' };  // Réinitialiser le formulaire
    this.closeAddEmployeeModal();
  }

  // Ouvrir le modal pour modifier un employé (logique similaire à l'ajout)
  openEditEmployeeModal(employee: any): void {
    // Logique pour modifier un employé
  }

  // Supprimer un employé
  deleteEmployee(id: number): void {
    this.employees = this.employees.filter(emp => emp.id !== id);
  }
}
