import { ICalendarDate } from '../Interface/ICalendarDate';

export interface IInputData {
  year: number;
  dates?: ICalendarDate[];
  disabledDays?: Date[];
}
