import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesUpdateComponent } from './activities-update.component';

describe('ActivitiesUpdateComponent', () => {
  let component: ActivitiesUpdateComponent;
  let fixture: ComponentFixture<ActivitiesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitiesUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
