import { Year } from '../model/Year';
import { Month } from '../model/Month';

describe('Year model Test', () => {

  it('months should have 12 months', () => {
    expect(new Year(2019).months.length).toBe(12);
  });

  it('year should by 2018',()=> {
      expect(new Year(2018).year).toBe(2018);
  });

  it('days of a month',() => {
    expect(new Year(2019).getMonthDays(1).length).toBe(28);
    expect(new Year(2019).getMonthDays(2).length).toBe(31);
    expect(new Year(2019).getMonthDays(3)[0].day.getDay()).toBe(1)
  });

  it('month should have weeks',() => {
    expect(new Month(new Year(2017).getMonthDays(3)).weeks.length).toBe(6);
  });

});
