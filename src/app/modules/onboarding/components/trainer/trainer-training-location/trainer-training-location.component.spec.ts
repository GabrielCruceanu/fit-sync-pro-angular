import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerTrainingLocationComponent } from './trainer-training-location.component';

describe('TrainerTrainingLocationComponent', () => {
  let component: TrainerTrainingLocationComponent;
  let fixture: ComponentFixture<TrainerTrainingLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainerTrainingLocationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrainerTrainingLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
