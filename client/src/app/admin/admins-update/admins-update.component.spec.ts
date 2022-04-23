import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsUpdateComponent } from './admins-update.component';

describe('AdminsUpdateComponent', () => {
  let component: AdminsUpdateComponent;
  let fixture: ComponentFixture<AdminsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
