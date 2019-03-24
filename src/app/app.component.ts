import { Component, OnInit } from '@angular/core';
import { FULL_YEAR_DEFAULT_LOCALE } from 'projects/fullyearcalendar-lib/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  rangeDialog:boolean = false;

    //my greek locale month names
  monthNamesGr: string[] = ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάϊος", "Ιούνιος", "Ιούλιος", 
  "Αύγουστος", "Σεπτέμβριος", "Οκτώμβριος", "Νοέμβριος", "Δεκέμβριος"];
  //En months locale
  monthNamesEn = FULL_YEAR_DEFAULT_LOCALE.monthNames; 
  // dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  dayNamesMinGr:string[] = ["Κυ", "Δε", "Τρ", "Τε", "Πε", "Πα", "Σα"];
  dayNamesMinEn:string[] = FULL_YEAR_DEFAULT_LOCALE.dayNamesMin;
  locale:any = FULL_YEAR_DEFAULT_LOCALE;

  selectedDate:Date;
  value:any;

  constructor(){}

  ngOnInit(): void {
    this.value = {
      year:new Date().getFullYear(),
      dates:[
        {
          id:1,
          tooltip:'Range 1',
          start:new Date('2018-12-21T00:34:15Z'),
          end:new Date('2019-01-10T00:34:15Z'),
          color:'grey',
          select: (range:any)=> this.onRangeSelect(range)
        },
        {
          id:2,
          tooltip:'big tooltip text for range 2',
          start:new Date('2019-03-21T00:34:15Z'),
          end:new Date('2019-05-21T00:34:15Z'),
          color:'orange',
          select: (range:any)=> this.onRangeSelect(range)
        },
        {
          id:3,
          tooltip:'Range 3',
          start:new Date('2019-08-11T00:34:15Z'),
          end:new Date('2019-08-21T00:34:15Z'),
          color:'#2edb57',
          select: (range:any)=> this.onRangeSelect(range)
        }
      ],
      disabledDays:[ 
        new Date('2019-07-21T00:34:15Z'),
        new Date('2019-07-25T00:34:15Z')
      ]
    };
  }

  onRangeSelect(range:any) {
    console.log('onRangeSelect',range)
    this.selectedDate = range.day;
  }

  onDaySelect(day:Date):void {
    this.selectedDate = day;
  }
  
  changeMonthLocale():void {
    this.locale.monthNames = (this.locale.monthNames == this.monthNamesGr) ? this.monthNamesEn : this.monthNamesGr; 
  }

  changeDayLocale():void {
    this.locale.dayNamesMin = (this.locale.dayNamesMin == this.dayNamesMinGr) ? this.dayNamesMinEn : this.dayNamesMinGr; 
  }

  addRange():void {
    this.rangeDialog = true;
  }

  onRangeCreate(range:any):void {
    this.rangeDialog = false;
    range.select = (range)=> this.onRangeSelect(range);
    this.value.dates.push(range);
  }

}
