import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionistExperienceComponent } from './nutritionist-experience.component';

describe('NutritionistExperienceComponent', () => {
  let component: NutritionistExperienceComponent;
  let fixture: ComponentFixture<NutritionistExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutritionistExperienceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NutritionistExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
