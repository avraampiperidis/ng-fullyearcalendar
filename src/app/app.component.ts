import { Component, OnInit } from '@angular/core';
import { Month, Year, FULL_YEAR_DEFAULT_LOCALE } from 'projects/fullyearcalendar-lib/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    //my greek locale month names
    monthsArr: string[] = ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάϊος", "Ιούνιος", "Ιούλιος", 
     "Αύγουστος", "Σεπτέμβριος", "Οκτώμβριος", "Νοέμβριος", "Δεκέμβριος"];

  month:Month;
  locale:any = FULL_YEAR_DEFAULT_LOCALE;

  ngOnInit(): void {
    //for custom month names
    //this.locale.monthNames = this.monthsArr;
    this.month = new Year(2019).months[6];
  }
  
}
