import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerAvailabilityComponent } from './trainer-availability.component';

describe('TrainerAvailabilityComponent', () => {
  let component: TrainerAvailabilityComponent;
  let fixture: ComponentFixture<TrainerAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainerAvailabilityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrainerAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
