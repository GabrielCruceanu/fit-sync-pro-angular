import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerFitnessExperienceComponent } from './trainer-fitness-experience.component';

describe('TrainerFitnessExperienceComponent', () => {
  let component: TrainerFitnessExperienceComponent;
  let fixture: ComponentFixture<TrainerFitnessExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainerFitnessExperienceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrainerFitnessExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
