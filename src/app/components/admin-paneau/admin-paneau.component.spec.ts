import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPaneauComponent } from './admin-paneau.component';

describe('AdminPaneauComponent', () => {
  let component: AdminPaneauComponent;
  let fixture: ComponentFixture<AdminPaneauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminPaneauComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPaneauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
