import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullyearcalendarLibComponent } from './fullyearcalendar-lib.component';

describe('FullyearcalendarLibComponent', () => {
  let component: FullyearcalendarLibComponent;
  let fixture: ComponentFixture<FullyearcalendarLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullyearcalendarLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullyearcalendarLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
