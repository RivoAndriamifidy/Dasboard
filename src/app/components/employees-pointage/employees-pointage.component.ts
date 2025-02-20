import { Component } from '@angular/core';

@Component({
  selector: 'app-employees-pointage',
  standalone: false,
  
  templateUrl: './employees-pointage.component.html',
  styleUrl: './employees-pointage.component.css'
})
export class EmployeesPointageComponent {

  employees = [
    { name: 'Jean Dupont' },
    { name: 'Alice Martin' },
    { name: 'David Morel' }
  ];

  attendances: any[] = [];
  leaves: any[] = [];
  showAddLeaveModal: boolean = false;
  newLeave: any = { employeeName: '', startDate: '', endDate: '', type: '', status: 'En attente' };

  openAddLeaveModal() {
    this.showAddLeaveModal = true;
  }

  closeAddLeaveModal() {
    this.showAddLeaveModal = false;
    this.newLeave = { employeeName: '', startDate: '', endDate: '', type: '', status: 'En attente' };
  }

  addLeave() {
    this.calculateLeaveDuration();
    this.leaves.push({ ...this.newLeave });
    this.closeAddLeaveModal();
  }

  editAttendance(leave: any) {
    this.newLeave = { ...leave };
    this.openAddLeaveModal();
  }

  deleteAttendance(id: number) {
    this.leaves = this.leaves.filter(l => l.id !== id);
  }

  calculateLeaveDuration() {
    const start = new Date(this.newLeave.startDate);
    const end = new Date(this.newLeave.endDate);
    this.newLeave.duration = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  }
}
