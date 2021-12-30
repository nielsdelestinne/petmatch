import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatPetDateAppointmentComponent } from './feat-pet-date-appointment.component';

describe('FeatPetDateAppointmentComponent', () => {
  let component: FeatPetDateAppointmentComponent;
  let fixture: ComponentFixture<FeatPetDateAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatPetDateAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatPetDateAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
