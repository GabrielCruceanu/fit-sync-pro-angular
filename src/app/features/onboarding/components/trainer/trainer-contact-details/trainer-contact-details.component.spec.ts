import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerContactDetailsComponent } from './trainer-contact-details.component';

describe('TrainerContactDetailsComponent', () => {
  let component: TrainerContactDetailsComponent;
  let fixture: ComponentFixture<TrainerContactDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainerContactDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrainerContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
