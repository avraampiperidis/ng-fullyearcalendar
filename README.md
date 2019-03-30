# Full Year Calendar
A full year calendar for Angular applications. <br>
[![Build Status](https://travis-ci.org/avraampiperidis/ng-fullyearcalendar.svg?branch=dev)](https://travis-ci.org/avraampiperidis/ng-fullyearcalendar)
<br>
<b>[Live Demo](https://avraampiperidis.github.io/ng-fullyearcalendar/docs/) </b> <br>

<img src="https://github.com/avraampiperidis/ng-fullyearcalendar/blob/dev/assets/year_nav.gif?raw=true" width="750" />
<br>
```typescript
//in module
import { FullyearcalendarLibModule } from 'node_modules/fullyearcalendar-lib/';
//in component
import { IInputData } from 'fullyearcalendar-lib/lib/Interface/IInputData';
value:IInputData = {
      year: new Date().getFullYear() //2019
};
```