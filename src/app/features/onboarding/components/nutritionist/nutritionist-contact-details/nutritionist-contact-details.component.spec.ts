import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionistContactDetailsComponent } from './nutritionist-contact-details.component';

describe('NutritionistContactDetailsComponent', () => {
  let component: NutritionistContactDetailsComponent;
  let fixture: ComponentFixture<NutritionistContactDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutritionistContactDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NutritionistContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
