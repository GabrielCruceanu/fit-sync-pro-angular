import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTrainingLocationComponent } from './client-training-location.component';

describe('ClientTrainingLocationComponent', () => {
  let component: ClientTrainingLocationComponent;
  let fixture: ComponentFixture<ClientTrainingLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientTrainingLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientTrainingLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
