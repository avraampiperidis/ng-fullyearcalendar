import { FullyearcalendarLibComponent } from '../fullyearcalendar-lib.component';

describe('FullyearcalendarLibComponent Test', () => {
  var comp:FullyearcalendarLibComponent;

  beforeEach(()=> {
    comp = new FullyearcalendarLibComponent();
    comp._initValue = {year:2019,dates:[
      {
        id:1,
        tooltip:'range1',
        start:new Date('2018-12-10'),
        end:new Date('2019-1-10')
      },
      {
        id:2,
        tooltip:'range2',
        start:new Date('2019-03-10'),
        end:new Date('2019-04-20')
      },
      {
        id:3,
        tooltip:'range3',
        start:new Date('2019-04-1'),
        end:new Date('2019-05-20')
      }
    ]};
  })

  it('should be year 2019', () => {
      expect(comp.value.year).toBe(2019);
  });

  it('range in day should not be null',() => {
    expect(comp.year.months[0].weeks[0].daysOfWeek[4].ranges.length).toBe(1);
  })

  it('ranges in day(2019-04-03) should be 2',() => {
    expect(comp.year.months[3].weeks[0].daysOfWeek[2].ranges.length).toBe(2);
  })

  it('range in day(2019-04-22) should be 1',() => {
    expect(comp.year.months[3].weeks[3].daysOfWeek[2].ranges.length).toBe(1);
  })

  it('range 2 should have a tooltip range2',()=> {
    expect(comp.year.months[3].weeks[2].daysOfWeek[3].ranges[0].tooltip).toBe('range2');
  })

  it('expect range 2 to end at 2019-04-20',()=> {
    expect(comp.year.months[3].weeks[2].daysOfWeek[3].ranges[0].end.getDate()).toBe(new Date('2019-04-20').getDate());
  })

});
