import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsibleAllComponent } from './responsible-all.component';

describe('ResponsibleAllComponent', () => {
  let component: ResponsibleAllComponent;
  let fixture: ComponentFixture<ResponsibleAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsibleAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsibleAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
