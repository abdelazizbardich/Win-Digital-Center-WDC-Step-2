import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesParticipateComponent } from './activities-participate.component';

describe('ActivitiesParticipateComponent', () => {
  let component: ActivitiesParticipateComponent;
  let fixture: ComponentFixture<ActivitiesParticipateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitiesParticipateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesParticipateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
