import { Component, OnInit, Input } from '@angular/core';
import { DayOfWeek } from './model/dayOfWeek';
import { Year } from './model/Year';

export const FULL_YEAR_DEFAULT_LOCALE:any = {
  firstDayOfWeek: 0,
  dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  dayNamesEnum: [DayOfWeek.SUNDAY, DayOfWeek.MONDAY, DayOfWeek.TUESDAY, DayOfWeek.WEDNESDAY, DayOfWeek.THURSDAY, DayOfWeek.FRIDAY, DayOfWeek.SATURDAY],
  dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  monthNames: [ "January","February","March","April","May","June","July","August","September","October","November","December" ],
  monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  dateFormat: 'mm/dd/yy'
};

@Component({
  selector: 'ng-fullyearcalendar-lib',
  templateUrl:'fullyearcalendar-lib.html',
  styleUrls:['fullyearcalendar-lib.scss']
})
export class FullyearcalendarLibComponent {

  @Input()
  locale:any = FULL_YEAR_DEFAULT_LOCALE;

  public year:Year;

  constructor() { }

  @Input('year')
  set _initYear(year:number) {
    this.year = new Year(year);
  }

}
