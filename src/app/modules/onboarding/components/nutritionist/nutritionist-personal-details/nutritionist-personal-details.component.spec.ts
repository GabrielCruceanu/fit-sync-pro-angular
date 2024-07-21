import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionistPersonalDetailsComponent } from './nutritionist-personal-details.component';

describe('NutritionistPersonalDetailsComponent', () => {
  let component: NutritionistPersonalDetailsComponent;
  let fixture: ComponentFixture<NutritionistPersonalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutritionistPersonalDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NutritionistPersonalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
