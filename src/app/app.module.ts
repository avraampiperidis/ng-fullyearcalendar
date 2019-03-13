import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FullyearcalendarLibModule, MonthlyCalendarModule } from 'projects/fullyearcalendar-lib/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FullyearcalendarLibModule,
    MonthlyCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
