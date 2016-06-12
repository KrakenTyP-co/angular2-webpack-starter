import {Item} from '../item.interface';
import {ValueItem} from '../value/value.item';

export class InvoiceItem implements Item {
  id: number = Math.random() * 100000000;
  title: string = '';
  description: string = '';
  valueItem: ValueItem;
  protected _month: number = 1;

  constructor () {
  }

  identifier (): Number {
    return this.id;
  }

  set month (month: Number) {
    this._month = month.valueOf() + 1;
  }

  get month (): Number {
    return this._month;
  }

}
