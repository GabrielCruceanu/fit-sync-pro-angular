import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFoodPreferencesComponent } from './client-food-preferences.component';

describe('ClientFoodPreferencesComponent', () => {
  let component: ClientFoodPreferencesComponent;
  let fixture: ComponentFixture<ClientFoodPreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientFoodPreferencesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientFoodPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
