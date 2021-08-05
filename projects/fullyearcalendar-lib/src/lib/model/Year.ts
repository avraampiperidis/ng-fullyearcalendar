import { Month } from './Month';
import { DayOfWeek } from './dayOfWeek';
import { Day } from './Day';

export class Year {

    year: number;
    months: Month[] = [];

  constructor(y: number, private startingMonth: number) {
        this.year = y;
        this._initYear();
    }


    private _initYear(): void {
        for (let i = this.startingMonth; i < 12; i++) {
          this.createMonth(i, this.year);
        }
        for ( let i = 0; i < this.startingMonth; i++) {
          this.createMonth(i, this.year + 1);
        }
    }

  private createMonth(i: number, year: number) {
    const days: Day[] = this.getMonthDays(i, year);
    const month = new Month(days);
    month.index = i;
    month.days = days;
    this.months.push(month);
  }

  getMonthDays(month: number, year: number): Day[] {
        const date = new Date(year, month, 1);
        const days: Day[] = [];
        while (date.getMonth() === month) {
            const day = new Day();
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
