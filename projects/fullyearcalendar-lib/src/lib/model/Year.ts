import { Month } from "./Month";
import { DayOfWeek } from "./dayOfWeek";
import { Day } from "./Day";

export class Year {

    year: number;
    months: Month[] = [];

    constructor(y: number) {
        this.year = y;
        this._initYear();
        //will kind of remove/delete empty not valid days.
        // for(let i=0; i < this.months.length; i++) {
        //     for(let x=0; x < this.months[i].weeks.length; x++) {
        //         for(let y=0; y < this.months[i].weeks[x].daysOfWeek.length; y++) {
        //             if(!this.months[i].weeks[x].daysOfWeek[y].init) {
        //                 delete this.months[i].weeks[x].daysOfWeek[y];
        //             }
        //         }
        //     }
        // }
    }


    private _initYear(): void {
        for (let i = 0; i < 12; i++) {
            let days:Day[] = this.getMonthDays(i)
            let month = new Month(days);
            month.index = i;
            month.days = days;
            this.months.push(month);
        }
    }

    getMonthDays(month: number): Day[] {
        let date = new Date(this.year, month, 1);
        let days: Day[] = [];
        while (date.getMonth() === month) {
            let day = new Day();
            day.day = new Date(date);
            day.dayOfWeek = this.getDayOfWeek(day.day.getDay());
            days.push(day);
            date.setDate(date.getDate() + 1);
        }
        return days;
    }

    private getDayOfWeek(day: number): DayOfWeek {
        switch (day) {
            case 0: return DayOfWeek.SUNDAY;
            case 1: return DayOfWeek.MONDAY;
            case 2: return DayOfWeek.TUESDAY;
            case 3: return DayOfWeek.WEDNESDAY;
            case 4: return DayOfWeek.THURSDAY;
            case 5: return DayOfWeek.FRIDAY;
            case 6: return DayOfWeek.SATURDAY;
        }
    }
}