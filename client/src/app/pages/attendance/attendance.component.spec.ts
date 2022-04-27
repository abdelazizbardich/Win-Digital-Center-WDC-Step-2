import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceAllComponent } from './attendance.component';

describe('AttendanceAllComponent', () => {
  let component: AttendanceAllComponent;
  let fixture: ComponentFixture<AttendanceAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});