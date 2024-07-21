import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymPersonalDetailsComponent } from './gym-personal-details.component';

describe('GymPersonalDetailsComponent', () => {
  let component: GymPersonalDetailsComponent;
  let fixture: ComponentFixture<GymPersonalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GymPersonalDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GymPersonalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
