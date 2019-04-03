# Full Year Calendar
A full year calendar for Angular applications. <br>
[![Build Status](https://travis-ci.org/avraampiperidis/ng-fullyearcalendar.svg?branch=dev)](https://travis-ci.org/avraampiperidis/ng-fullyearcalendar)
<br>
<b>[Live Demo](https://avraampiperidis.github.io/ng-fullyearcalendar/docs/) </b> <br>
## Install
npm i  fullyearcalendar-lib
## Simple  usage
<b>Module</b>
```typescript
import { FullyearcalendarLibModule } from 'node_modules/fullyearcalendar-lib/';
```
<b>html</b><br>
```html
<ng-fullyearcalendar-lib [value]="value"></ng-fullyearcalendar-lib>
```
<b>Component</b><br>

```typescript
import { IInputData } from 'fullyearcalendar-lib/lib/Interface/IInputData';

value:IInputData = {
      year: new Date().getFullYear() //2019
};
```

## Date ranges
```typescript
import { ICalendarDate } from 'fullyearcalendar-lib/lib/Interface/ICalendarDate';

value:IInputData = {
      year: new Date().getFullYear(), //2019
      dates: [
        {
          id: 1,
          tooltip: 'Range 1',
          start: new Date('2018-12-21T00:34:15Z'),
          end: new Date('2019-01-10T00:34:15Z'),
          color: 'grey',
          select: (range: ICalendarDate) => this.onRangeSelect(range)
        },
        {
          id: 2,
          tooltip: 'big tooltip text for range 2',
          start: new Date('2019-03-21T00:34:15Z'),
          end: new Date('2019-05-21T00:34:15Z'),
          color: 'orange',
          select: (range: ICalendarDate) => this.onRangeSelect(range)
        },
        {
          id: 3,
          tooltip: 'Range 3',
          start: new Date('2019-08-11T00:34:15Z'),
          end: new Date('2019-08-21T00:34:15Z'),
          color: '#2edb57',
          select: (range: ICalendarDate) => this.onRangeSelect(range)
        }
      ],
};

onRangeSelect(range:ICalendarDate):void {
}
```

## Custom Locale
```typescript
import { LocaleSettings } from 'fullyearcalendar-lib/lib/Interface/LocaleSettings';

locale: LocaleSettings = {
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthNames: [ "January","February","March","April","May","June","July","August","September","October","November","December" ]
};
```

## Disabled days
```typescript
import { LocaleSettings } from 'fullyearcalendar-lib/lib/Interface/IDisabledDate';

value:IInputData = {
      year: new Date().getFullYear(), //2019
      disabledDays: [
        {date:new Date('2019-07-21T00:34:15Z')},
        {date:new Date('2019-04-05T00:34:15Z')},
        {date:new Date('2019-07-25T00:34:15Z'),tooltip:'closed'}
      ]
};
```

```html
<ng-fullyearcalendar-lib [responsive]="responsive" [locale]="locale" [underline]="underline" [value]="value" (onDaySelect)="onDaySelect($event)"></ng-fullyearcalendar-lib>
```

#### Properties

<table>
<thead>
	<tr>
		<td>Name</td>
		<td>Type</td>
		<td>Default</td>
		<td>Description</td>
	</tr>
</thead>
<tbody>
	<tr>
		<td>
			responsive
		</td>
		<td>
			boolean
		</td>
		<td>
			true
		</td>
		<td>
			 if false the grid will be 4x4 
		</td>
	</tr>
	<tr>
		<td>
			locale
		</td>
		<td>
			LocaleSettings
		</td>
		<td>
			default English locale
		</td>
		<td>
			the locale for days and months
		</td>
	</tr>
	<tr>
		<td>
			underline
		</td>
		<td>
			boolean
		</td>
		<td>
			false
		</td>
		<td>
			underline or block for date range style
		</td>
	</tr>
</tbody>
</table>

#### Events
<table>
<thead>
	<tr>
		<td>Name</td>
		<td>parameters</td>
		<td>Description</td>
	</tr>
</thead>
<tbody>
	<tr>
		<td>
			onDaySelect
		</td>
		<td>
			event:Date
		</td>
		<td>
			callback when a day out of a range is selected.
		</td>
	</tr>
</tbody>
</table>

#### features
<b>Year navigation</b><br>
<img src="https://github.com/avraampiperidis/ng-fullyearcalendar/blob/dev/assets/year_nav.gif?raw=true" width="750" /><br>
<b>Date Selection</b><br>
<img src="https://github.com/avraampiperidis/ng-fullyearcalendar/blob/dev/assets/select.gif?raw=true" width="750" /><br>
<b>Date Ranges</b><br>
<img src="https://github.com/avraampiperidis/ng-fullyearcalendar/blob/dev/assets/range.gif?raw=true" width="750" /><br>
<b>Calendar dates overline styles</b><br>
<img src="https://github.com/avraampiperidis/ng-fullyearcalendar/blob/dev/assets/overline.gif?raw=true" width="750" /><br>
<b>Custom Locale</b><br>
<img src="https://github.com/avraampiperidis/ng-fullyearcalendar/blob/dev/assets/locale.gif?raw=true" width="750" /><br>
