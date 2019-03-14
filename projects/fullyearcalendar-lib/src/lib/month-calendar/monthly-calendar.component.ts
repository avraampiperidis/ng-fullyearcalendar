import { Component, Input } from "@angular/core";
import { Month } from "../model/Month";

@Component({
    selector:'month-calendar',
    templateUrl:'monthly-calendar.html',
    styleUrls:['monthly-calendar.scss'],
})
export class MonthlyCalendarComponent  {
   
    @Input()
    locale:any;
    @Input()
    month:Month;

}