import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPersonalDetailsComponent } from './client-personal-details.component';

describe('ClientPersonalDetailsComponent', () => {
  let component: ClientPersonalDetailsComponent;
  let fixture: ComponentFixture<ClientPersonalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientPersonalDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientPersonalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
