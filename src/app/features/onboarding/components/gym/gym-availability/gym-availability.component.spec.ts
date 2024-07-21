import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymAvailabilityComponent } from './gym-availability.component';

describe('GymAvailabilityComponent', () => {
  let component: GymAvailabilityComponent;
  let fixture: ComponentFixture<GymAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GymAvailabilityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GymAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
