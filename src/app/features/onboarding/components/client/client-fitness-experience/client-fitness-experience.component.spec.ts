import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFitnessExperienceComponent } from './client-fitness-experience.component';

describe('ClientFitnessExperienceComponent', () => {
  let component: ClientFitnessExperienceComponent;
  let fixture: ComponentFixture<ClientFitnessExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientFitnessExperienceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientFitnessExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
