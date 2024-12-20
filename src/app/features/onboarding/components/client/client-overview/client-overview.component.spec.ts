import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientOverviewComponent } from './client-overview.component';

describe('ClientOverviewComponent', () => {
  let component: ClientOverviewComponent;
  let fixture: ComponentFixture<ClientOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
