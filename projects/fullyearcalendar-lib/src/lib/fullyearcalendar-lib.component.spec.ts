import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FullyearcalendarLibComponent } from './fullyearcalendar-lib.component';
import { Year } from './model/Year';

describe('FullyearcalendarLibComponent', () => {

  it('should create', () => {
    let year:Year = new Year(2019);
    expect(year.months.length).toBe(12);
  });

});
