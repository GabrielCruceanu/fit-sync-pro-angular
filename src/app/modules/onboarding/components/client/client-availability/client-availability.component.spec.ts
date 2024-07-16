import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAvailabilityComponent } from './client-availability.component';

describe('ClientAvailabilityComponent', () => {
  let component: ClientAvailabilityComponent;
  let fixture: ComponentFixture<ClientAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientAvailabilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
