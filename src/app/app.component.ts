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

  month:Month;
  locale:any = FULL_YEAR_DEFAULT_LOCALE;

  year:number = new Date().getFullYear();

  ngOnInit(): void {
    //for custom month names
    //this.locale.monthNames = this.monthsArr;
    this.month = new Year(this.year).months[6];
  }
  
  changeMonthLocale():void {
    this.locale.monthNames = (this.locale.monthNames == this.monthNamesGr) ? this.locale.monthNames = this.monthNamesEn : this.locale.monthNames = this.monthNamesGr; 
  }

  changeDayLocale():void {
    this.locale.dayNamesMin = (this.locale.dayNamesMin == this.dayNamesMinGr) ? this.locale.dayNamesMin = this.dayNamesMinEn : this.locale.dayNamesMin = this.dayNamesMinGr; 
  }

}
