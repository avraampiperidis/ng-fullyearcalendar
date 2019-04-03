import { ICalendarDate } from '../Interface/ICalendarDate';
import { IDisabledDate } from './IDisabledDate';

export interface IInputData {
  year: number;
  dates?: ICalendarDate[];
  disabledDays?: IDisabledDate[];
}
