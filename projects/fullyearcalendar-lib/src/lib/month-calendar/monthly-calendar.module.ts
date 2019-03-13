import { CommonModule } from "@angular/common";
import { MonthlyCalendarComponent } from "./monthly-calendar.component";
import { NgModule } from "@angular/core";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [MonthlyCalendarComponent],
    exports: [MonthlyCalendarComponent]
})
export class MonthlyCalendarModule {

}