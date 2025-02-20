import { Component } from '@angular/core';

@Component({
  selector: 'app-conge',
  standalone: false,
  
  templateUrl: './conge.component.html',
  styleUrl: './conge.component.css'
})
export class CongeComponent {

  employees = [
    { name: 'Jean Dupont' },
    { name: 'Alice Martin' },
    { name: 'David Morel' }
  ];

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

  editLeave(leave: any) {
    this.newLeave = { ...leave };
    this.openAddLeaveModal();
  }

  deleteLeave(id: number) {
    this.leaves = this.leaves.filter(l => l.id !== id);
  }

  calculateLeaveDuration() {
    const start = new Date(this.newLeave.startDate);
    const end = new Date(this.newLeave.endDate);
    this.newLeave.duration = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  }
}
