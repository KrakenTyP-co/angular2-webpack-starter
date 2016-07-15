import {Item} from './item.interface';
import {MonthItem} from './month/month.item';

export class OverallItem implements Item {
  id: number = Math.random() * 100000000;
  month: MonthItem;

  constructor () {

  }

  identifier (): number {
    return this.id;
  }
}
