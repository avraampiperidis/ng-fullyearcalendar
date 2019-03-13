import { NgModule } from '@angular/core';
import { FullyearcalendarLibComponent } from './fullyearcalendar-lib.component';
import { MonthlyCalendarModule } from './month-calendar/monthly-calendar.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FullyearcalendarLibComponent],
  imports: [
    CommonModule,
    MonthlyCalendarModule
  ],
  exports: [FullyearcalendarLibComponent]
})
export class FullyearcalendarLibModule { }
