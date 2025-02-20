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
  showAddModal: boolean = false;
  newAttendance: any = { employeeName: '', date: '', checkIn: '', checkOut: '' };

  openAddAttendanceModal() {
    this.showAddModal = true;
  }

  closeAddAttendanceModal() {
    this.showAddModal = false;
    this.newAttendance = { employeeName: '', date: '', checkIn: '', checkOut: '' };
  }

  addAttendance() {
    if (this.newAttendance.checkOut) {
      this.calculateDuration();
    }

    this.attendances.push({ ...this.newAttendance });
    this.closeAddAttendanceModal();
  }

  editAttendance(attendance: any) {
    this.newAttendance = { ...attendance };
    this.openAddAttendanceModal();
  }

  deleteAttendance(id: number) {
    this.attendances = this.attendances.filter(a => a.id !== id);
  }

  calculateDuration() {
    const checkInTime = new Date(`2023-01-01T${this.newAttendance.checkIn}:00`);
    const checkOutTime = new Date(`2023-01-01T${this.newAttendance.checkOut}:00`);

    const diff = (checkOutTime.getTime() - checkInTime.getTime()) / (1000 * 60 * 60);
    this.newAttendance.duration = `${diff.toFixed(2)} h`;
  }
}
