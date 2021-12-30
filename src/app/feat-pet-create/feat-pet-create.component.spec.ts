import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatPetCreateComponent } from './feat-pet-create.component';

describe('FeatPetCreateComponent', () => {
  let component: FeatPetCreateComponent;
  let fixture: ComponentFixture<FeatPetCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatPetCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatPetCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
