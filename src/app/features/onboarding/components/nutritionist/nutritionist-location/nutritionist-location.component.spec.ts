import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionistLocationComponent } from './nutritionist-location.component';

describe('NutritionistLocationComponent', () => {
  let component: NutritionistLocationComponent;
  let fixture: ComponentFixture<NutritionistLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutritionistLocationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NutritionistLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
