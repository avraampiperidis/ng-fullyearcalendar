import { Component, OnInit } from '@angular/core';
import { Month, Year, FULL_YEAR_DEFAULT_LOCALE } from 'projects/fullyearcalendar-lib/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    //my greek locale month names
  monthNamesGr: string[] = ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάϊος", "Ιούνιος", "Ιούλιος", 
  "Αύγουστος", "Σεπτέμβριος", "Οκτώμβριος", "Νοέμβριος", "Δεκέμβριος"];

  //En months locale
  monthNamesEn = FULL_YEAR_DEFAULT_LOCALE.monthNames; 

  // dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  dayNamesMinGr:string[] = ["Κυ", "Δε", "Τρ", "Τε", "Πε", "Πα", "Σα"];

  dayNamesMinEn:string[] = FULL_YEAR_DEFAULT_LOCALE.dayNamesMin;

  locale:any = FULL_YEAR_DEFAULT_LOCALE;

  year:number = new Date().getFullYear();

  selectedDate:Date;

  dates:any[];
  disabledDays:Date[];

  ngOnInit(): void {
    this.dates = [
      {
        id:1,
        tooltip:'Range 1',
        start:new Date('2019-01-21T00:34:15Z'),
        end:new Date('2019-02-21T00:34:15Z'),
        color:'grey',
        select: (range:any)=> this.onRangeSelect(range)
      },
      {
        id:2,
        tooltip:'Range 1',
        start:new Date('2019-03-21T00:34:15Z'),
        end:new Date('2019-05-21T00:34:15Z'),
        color:'grey',
        select: (range:any)=> this.onRangeSelect(range)
      }
    ];

    this.disabledDays = [
      new Date('2019-07-21T00:34:15Z'),
      new Date('2019-07-25T00:34:15Z'),
    ]
  }

  onRangeSelect(range:any) {
  }
  
  changeMonthLocale():void {
    this.locale.monthNames = (this.locale.monthNames == this.monthNamesGr) ? this.monthNamesEn : this.monthNamesGr; 
  }

  changeDayLocale():void {
    this.locale.dayNamesMin = (this.locale.dayNamesMin == this.dayNamesMinGr) ? this.dayNamesMinEn : this.dayNamesMinGr; 
  }

  onDaySelect(day:Date):void {
    this.selectedDate = day;
  }

}
