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
#### features
<b>Year navigation</b>
<img src="https://github.com/avraampiperidis/ng-fullyearcalendar/blob/dev/assets/year_nav.gif?raw=true" width="750" />
<b>Date Selection</b>
<img src="https://github.com/avraampiperidis/ng-fullyearcalendar/blob/dev/assets/select.gif?raw=true" width="750" />
<b>Date Ranges</b>
<img src="https://github.com/avraampiperidis/ng-fullyearcalendar/blob/dev/assets/range.gif?raw=true" width="750" />
<b>Calendar dates overline styles</b>
<img src="https://github.com/avraampiperidis/ng-fullyearcalendar/blob/dev/assets/overline.gif?raw=true" width="750" />
<b>Custom Locale</b>
<img src="https://github.com/avraampiperidis/ng-fullyearcalendar/blob/dev/assets/locale.gif?raw=true" width="750" />
