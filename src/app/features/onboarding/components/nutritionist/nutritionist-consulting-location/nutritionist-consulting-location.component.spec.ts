import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionistConsultingLocationComponent } from './nutritionist-consulting-location.component';

describe('NutritionistConsultingLocationComponent', () => {
  let component: NutritionistConsultingLocationComponent;
  let fixture: ComponentFixture<NutritionistConsultingLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutritionistConsultingLocationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NutritionistConsultingLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
