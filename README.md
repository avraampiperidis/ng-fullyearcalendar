# Full Year Calendar
A full year calendar for Angular applications. <br>

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