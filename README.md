# Full Year Calendar
A full year calendar for Angular applications. <br>
[![Build Status](https://travis-ci.org/avraampiperidis/ng-fullyearcalendar.svg?branch=dev)](https://travis-ci.org/avraampiperidis/ng-fullyearcalendar)
<br>
<b>[Live Demo](https://avraampiperidis.github.io/ng-fullyearcalendar/docs/) </b> <br>

#### Simple  usage
<img src="https://github.com/avraampiperidis/ng-fullyearcalendar/blob/dev/assets/year_nav.gif?raw=true" width="550" />
<b>Module</b>
```typescript
import { FullyearcalendarLibModule } from 'node_modules/fullyearcalendar-lib/';
//your module
imports:[
...
FullyearcalendarLibModule
...
]
```
<b>html</b>
```html
<ng-fullyearcalendar-lib [value]="value"></ng-fullyearcalendar-lib>
```
<b>Component</b>
```typescript
import { IInputData } from 'fullyearcalendar-lib/lib/Interface/IInputData';

value:IInputData = {
      year: new Date().getFullYear() //2019
};
```
