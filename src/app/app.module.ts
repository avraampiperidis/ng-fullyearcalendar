import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FullyearcalendarLibModule } from 'projects/fullyearcalendar-lib/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FullyearcalendarLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
