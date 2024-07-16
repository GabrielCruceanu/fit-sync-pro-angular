import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionistOnboardingComponent } from './nutritionist-onboarding.component';

describe('NutritionistOnboardingComponent', () => {
  let component: NutritionistOnboardingComponent;
  let fixture: ComponentFixture<NutritionistOnboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutritionistOnboardingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutritionistOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
