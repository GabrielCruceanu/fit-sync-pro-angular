import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionistOverviewComponent } from './nutritionist-overview.component';

describe('NutritionistOverviewComponent', () => {
  let component: NutritionistOverviewComponent;
  let fixture: ComponentFixture<NutritionistOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutritionistOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NutritionistOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
