import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTrainingAvailabilityComponent } from './client-training-availability.component';

describe('ClientTrainingAvailabilityComponent', () => {
  let component: ClientTrainingAvailabilityComponent;
  let fixture: ComponentFixture<ClientTrainingAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientTrainingAvailabilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientTrainingAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
