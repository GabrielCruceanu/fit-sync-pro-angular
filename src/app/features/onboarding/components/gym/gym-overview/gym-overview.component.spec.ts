import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymOverviewComponent } from './gym-overview.component';

describe('GymOverviewComponent', () => {
  let component: GymOverviewComponent;
  let fixture: ComponentFixture<GymOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GymOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GymOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
