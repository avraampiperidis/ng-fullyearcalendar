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
