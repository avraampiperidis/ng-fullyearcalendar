import { Component, Input, Output, EventEmitter, OnDestroy, DoCheck } from '@angular/core';
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
  styleUrls:['fullyearcalendar-lib.scss'],
})
export class FullyearcalendarLibComponent implements OnDestroy,DoCheck {
  
  private initial_data:any;
  
  @Input()
  locale:any = FULL_YEAR_DEFAULT_LOCALE;

  @Input()
  responsive:boolean = true;

  @Input()
  value:any;
 
  @Output()
  onDaySelect:EventEmitter<Date> = new EventEmitter<Date>();

  public year:Year;

  constructor() { }

  ngOnDestroy(): void {
    this.onDaySelect.unsubscribe();
  }

  ngDoCheck(): void { 
    if(JSON.stringify(this.initial_data) !== JSON.stringify(this.value)) {
      this.initial_data = JSON.parse(JSON.stringify(this.value));
      this.initYear(this.year.year);
    }
  }


  @Input('year')
  set _initYear(year:number) {
      this.initYear(year);
  }

  private initYear(year:number) {
    this.year = new Year(year);
    setTimeout(()=> {
      if(this.value) {
        this.initial_data = JSON.parse(JSON.stringify(this.value));
        if(this.value.dates && this.value.dates.length > 0){
          for(let d of this.value.dates) {
            for(let m of this.year.months) {
              for(let w of m.weeks) {
                for(let day of w.daysOfWeek) {
                  if(day.day >= d.start && day.day <= d.end) {
                    day.color = d.color;
                    day.select = ():void => {
                      let dClone = JSON.parse(JSON.stringify(d));
                      dClone.day = day;
                      d.select(dClone);
                    }
                  }
                }
              }
            }
          }
        }
      }
    });
  }


  onDayClicked(day:Date):void {
    this.onDaySelect.emit(day);
  }

}
