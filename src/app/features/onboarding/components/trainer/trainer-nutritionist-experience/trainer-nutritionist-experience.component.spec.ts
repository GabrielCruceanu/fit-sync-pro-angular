import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerNutritionistExperienceComponent } from './trainer-nutritionist-experience.component';

describe('TrainerNutritionistExperienceComponent', () => {
  let component: TrainerNutritionistExperienceComponent;
  let fixture: ComponentFixture<TrainerNutritionistExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainerNutritionistExperienceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrainerNutritionistExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
