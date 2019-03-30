import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FullyearcalendarLibModule } from 'projects/fullyearcalendar-lib/src/public_api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import { CreateRangeDialog } from './dialog/create-range-dialog';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {InputTextModule} from 'primeng/inputtext';
import {ColorPickerModule} from 'primeng/colorpicker';
import {PanelModule} from 'primeng/panel';
import {CheckboxModule} from 'primeng/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    CreateRangeDialog
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    FullyearcalendarLibModule,
    DialogModule,
    ButtonModule,
    CalendarModule,
    InputTextModule,
    ColorPickerModule,
    PanelModule,
    CheckboxModule
  ],
  // entryComponents:[CreateRangeDialog],
  providers: [],
  bootstrap: [AppComponent],
  // exports:[CreateRangeDialog]
})
export class AppModule { }
