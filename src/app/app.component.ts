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

  ngOnInit(): void {
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
