import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymContactDetailsComponent } from './gym-contact-details.component';

describe('GymContactDetailsComponent', () => {
  let component: GymContactDetailsComponent;
  let fixture: ComponentFixture<GymContactDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GymContactDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GymContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
