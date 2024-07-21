import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymLocationComponent } from './gym-location.component';

describe('GymLocationComponent', () => {
  let component: GymLocationComponent;
  let fixture: ComponentFixture<GymLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GymLocationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GymLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
