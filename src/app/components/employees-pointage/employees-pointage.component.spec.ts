import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesPointageComponent } from './employees-pointage.component';

describe('EmployeesPointageComponent', () => {
  let component: EmployeesPointageComponent;
  let fixture: ComponentFixture<EmployeesPointageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeesPointageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesPointageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
