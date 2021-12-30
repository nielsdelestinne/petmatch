import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatPetOverviewComponent } from './feat-pet-overview.component';

describe('FeatPetOverviewComponent', () => {
  let component: FeatPetOverviewComponent;
  let fixture: ComponentFixture<FeatPetOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatPetOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatPetOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
