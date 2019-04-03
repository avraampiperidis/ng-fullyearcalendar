import {Range} from './Range';

export class Day {
    day:Date;
    dayOfWeek:string;
    init:boolean = false;
    color:string;
    tooltip:string;
    ranges:Range[];
    isDisabled?:boolean = false;
}