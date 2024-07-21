import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymOnboardingComponent } from './gym-onboarding.component';

describe('GymOnboardingComponent', () => {
  let component: GymOnboardingComponent;
  let fixture: ComponentFixture<GymOnboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GymOnboardingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
