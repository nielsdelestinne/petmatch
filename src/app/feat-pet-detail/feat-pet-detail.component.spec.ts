import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatPetDetailComponent } from './feat-pet-detail.component';

describe('FeatPetDetailComponent', () => {
  let component: FeatPetDetailComponent;
  let fixture: ComponentFixture<FeatPetDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatPetDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatPetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
