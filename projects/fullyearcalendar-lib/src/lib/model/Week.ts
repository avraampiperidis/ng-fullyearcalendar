import { Day } from "./Day";

export class Week {
    daysOfWeek: Day[] = [];
    constructor() {
        for (let i = 0; i < 7; i++) {
            this.daysOfWeek.push(new Day());
        }
    }
    isFull(): boolean {
        return this.daysOfWeek[6].init;
    }
    add(day: Day): void {
        this.daysOfWeek[day.day.getDay()] = day;
    }

}