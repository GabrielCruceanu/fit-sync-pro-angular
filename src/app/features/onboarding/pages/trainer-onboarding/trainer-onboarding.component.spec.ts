import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerOnboardingComponent } from './trainer-onboarding.component';

describe('TrainerOnboardingComponent', () => {
  let component: TrainerOnboardingComponent;
  let fixture: ComponentFixture<TrainerOnboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainerOnboardingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
