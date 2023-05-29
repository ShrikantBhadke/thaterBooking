import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheaterBookingComponent } from './theater-booking.component';

describe('TheaterBookingComponent', () => {
  let component: TheaterBookingComponent;
  let fixture: ComponentFixture<TheaterBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheaterBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheaterBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
