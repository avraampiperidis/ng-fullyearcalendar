export interface ICalendarDate {
  id?: number;
  tooltip?: string;
  start: Date;
  end: Date;
  color?: string;
  day?:Date;
  select?(range: ICalendarDate): void;
}
