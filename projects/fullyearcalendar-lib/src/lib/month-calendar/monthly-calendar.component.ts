import { Component, Input, OnInit } from "@angular/core";
import { Month } from "../model/Month";

@Component({
    selector:'month-calendar',
    templateUrl:'monthly-calendar.html',
    styleUrls:['monthly-calendar.scss']
})
export class MonthlyCalendarComponent implements OnInit {
   
    @Input()
    locale:any;
    @Input()
    month:Month;
    weekDays: any[] = [];

    ngOnInit(): void {
        let dayIndex = this.locale.firstDayOfWeek;
        for(let i=0;i<7;i++) {
            this.weekDays.push(this.locale.dayNamesMin[dayIndex]);
            dayIndex = (dayIndex == 6) ? 0 : ++dayIndex;
        }
    }

}