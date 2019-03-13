import { Week } from "./Week";
import { Day } from "./Day";

export class Month {
    monthValue: number;
    month: Month
    description: string;
    days: Day[] = [];
    weeks: Week[] = [];

    constructor(daysOfmonth?: Day[]) {
        for (let i = 0; i < 6; i++) {
            this.weeks.push(new Week());
        }
        let weekIndex = 0;
        for (let d of daysOfmonth) {
            d.init = true;
            if (this.weeks[weekIndex].isFull()) {
                if (++weekIndex > 5) {
                    break;
                }
                this.weeks[weekIndex].add(d);
            } else {
                this.weeks[weekIndex].add(d);
            }
        }
    }
}