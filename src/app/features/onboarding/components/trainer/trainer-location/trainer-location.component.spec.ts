import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerLocationComponent } from './trainer-location.component';

describe('ClientLocationComponent', () => {
  let component: TrainerLocationComponent;
  let fixture: ComponentFixture<TrainerLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainerLocationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrainerLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
