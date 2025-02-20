import { Component } from '@angular/core';

@Component({
  selector: 'app-salaires',
  standalone: false,
  
  templateUrl: './salaires.component.html',
  styleUrl: './salaires.component.css'
})
export class SalairesComponent {

  employees = [
    { name: 'Jean Dupont', position: 'Développeur' },
    { name: 'Alice Martin', position: 'RH' },
    { name: 'David Morel', position: 'Comptable' }
  ];

  salaries: any[] = [];
  showAddSalaryModal: boolean = false;
  selectedMonth: string = '';
  newSalary: any = { employeeName: '', baseSalary: 0, bonus: 0, month: '', status: 'En attente' };

  openAddSalaryModal() {
    this.showAddSalaryModal = true;
  }

  closeAddSalaryModal() {
    this.showAddSalaryModal = false;
    this.newSalary = { employeeName: '', baseSalary: 0, bonus: 0, month: '', status: 'En attente' };
  }

  addSalary() {
    this.newSalary.totalSalary = this.newSalary.baseSalary + (this.newSalary.bonus || 0);
    this.salaries.push({ ...this.newSalary });
    this.closeAddSalaryModal();
  }

  editSalary(salary: any) {
    this.newSalary = { ...salary };
    this.openAddSalaryModal();
  }

  deleteSalary(id: number) {
    this.salaries = this.salaries.filter(s => s.id !== id);
  }

  filterSalaries() {
    if (!this.selectedMonth) return;
    this.salaries = this.salaries.filter(s => s.month === this.selectedMonth);
  }
}
