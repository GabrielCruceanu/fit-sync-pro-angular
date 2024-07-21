import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionistAvailabilityComponent } from './nutritionist-availability.component';

describe('NutritionistAvailabilityComponent', () => {
  let component: NutritionistAvailabilityComponent;
  let fixture: ComponentFixture<NutritionistAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutritionistAvailabilityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NutritionistAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
