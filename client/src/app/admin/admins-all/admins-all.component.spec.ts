import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsAllComponent } from './admins-all.component';

describe('AdminsAllComponent', () => {
  let component: AdminsAllComponent;
  let fixture: ComponentFixture<AdminsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
