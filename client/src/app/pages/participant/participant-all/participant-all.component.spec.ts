import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantAllComponent } from './participant-all.component';

describe('ParticipantAllComponent', () => {
  let component: ParticipantAllComponent;
  let fixture: ComponentFixture<ParticipantAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
