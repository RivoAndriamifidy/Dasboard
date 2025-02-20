import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: false,
  
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  users = [
    { id: 1, name: 'Alice', email: 'alice@mail.com', role: 'Admin', active: true },
    { id: 2, name: 'Bob', email: 'bob@mail.com', role: 'Employé', active: false },
    { id: 3, name: 'Claire', email: 'claire@mail.com', role: 'RH', active: true },
  ];

  roles = ['Admin', 'RH', 'Employé', 'Comptable'];

  isFormOpen = false;
  editMode = false;
  currentUser = { id: 0, name: '', email: '', role: '', active: true };

  openForm() {
    this.isFormOpen = true;
    this.editMode = false;
    this.currentUser = { id: 0, name: '', email: '', role: 'Employé', active: true };
  }

  editUser(user: any) {
    this.isFormOpen = true;
    this.editMode = true;
    this.currentUser = { ...user };
  }

  saveUser() {
    if (this.editMode) {
      const index = this.users.findIndex(u => u.id === this.currentUser.id);
      if (index !== -1) this.users[index] = { ...this.currentUser };
    } else {
      this.currentUser.id = this.users.length + 1;
      this.users.push({ ...this.currentUser });
    }
    this.closeForm();
  }

  deleteUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }

  closeForm() {
    this.isFormOpen = false;
  }
}
