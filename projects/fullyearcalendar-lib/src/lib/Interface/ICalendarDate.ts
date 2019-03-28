export interface ICalendarDate {
  id?: number;
  tooltip?: string;
  start: Date;
  end: Date;
  color?: string;
  select(range: any): void;
}
