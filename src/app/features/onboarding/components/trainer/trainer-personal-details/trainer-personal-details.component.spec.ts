import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerPersonalDetailsComponent } from './trainer-personal-details.component';

describe('TrainerPersonalDetailsComponent', () => {
  let component: TrainerPersonalDetailsComponent;
  let fixture: ComponentFixture<TrainerPersonalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainerPersonalDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrainerPersonalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
