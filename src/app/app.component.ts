import { Component, OnInit } from '@angular/core';
import { IInputData } from 'projects/fullyearcalendar-lib/src/lib/Interface/IInputData';
import { LocaleSettings } from 'projects/fullyearcalendar-lib/src/lib/Interface/LocaleSettings';
import { ICalendarDate } from 'projects/fullyearcalendar-lib/src/lib/Interface/ICalendarDate';

const dayNamesEn:string[] = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const dayNamesGr:string[] = ['Κυ', 'Δε', 'Τρ', 'Τε', 'Πε', 'Πα', 'Σα'];
const monthNamesEn:string[] = [ "January","February","March","April","May","June","July","August","September","October","November","December" ];
const monthNamesGr:string[] = ['Ιανουάριος','Φεβρουάριος','Μάρτιος','Απρίλιος','Μάϊος','Ιούνιος','Ιούλιος','Αύγουστος','Σεπτέμβριος','Οκτώμβριος','Νοέμβριος','Δεκέμβριος'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  rangeDialog: boolean = false;

  locale: LocaleSettings = {
    dayNamesMin: dayNamesEn,
    monthNames: monthNamesEn
  };

  selectedDate: Date;
  value: IInputData;

  underline: boolean = false;
  selectedRange: ICalendarDate;

  responsive:boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.value = {
      year: new Date().getFullYear(),
      dates: [
        {
          id: 1,
          tooltip: 'Range 1',
          start: new Date('2018-12-21T00:34:15Z'),
          end: new Date('2019-01-10T00:34:15Z'),
          color: 'grey',
          select: (range: ICalendarDate) => this.onRangeSelect(range)
        },
        {
          id: 2,
          tooltip: 'big tooltip text for range 2',
          start: new Date('2019-03-21T00:34:15Z'),
          end: new Date('2019-05-21T00:34:15Z'),
          color: 'orange',
          select: (range: ICalendarDate) => this.onRangeSelect(range)
        },
        {
          id: 3,
          tooltip: 'Range 3',
          start: new Date('2019-08-11T00:34:15Z'),
          end: new Date('2019-08-21T00:34:15Z'),
          color: '#2edb57',
          select: (range: ICalendarDate) => this.onRangeSelect(range)
        }
      ],
      disabledDays: [
        new Date('2019-07-21T00:34:15Z'),
        new Date('2019-07-25T00:34:15Z')
      ]
    };
  }

  onRangeSelect(range: ICalendarDate) {
    console.log('onRangeSelect', range);
    this.selectedDate = range.day;
    this.selectedRange = range;
  }

  onDaySelect(day: Date): void {
    this.selectedRange = null;
    this.selectedDate = day;
  }

  changeMonthLocale(): void {
    this.locale.monthNames =
      this.locale.monthNames == monthNamesGr
        ? monthNamesEn
        : monthNamesGr;
  }

  changeDayLocale(): void {
    this.locale.dayNamesMin =
      this.locale.dayNamesMin == dayNamesGr
        ? dayNamesEn
        : dayNamesGr;
  }

  addRange(): void {
    this.selectedRange = null;
    this.rangeDialog = true;
  }

  editRange(): void {
    this.rangeDialog = true;
  }

  onRangeCreate(range: any): void {
    this.rangeDialog = false;
    range.select = range => this.onRangeSelect(range);
    //if it has id i suppose its update otherwise its a new record
    if (range.id) {
      for (let i = 0; i < this.value.dates.length; i++) {
        if (this.value.dates[i].id == range.id) {
          this.value.dates[i] = range;
          break;
        }
      }
    } else {
      range.id = new Date().getTime();
      this.value.dates.push(range);
    }
  }
}
