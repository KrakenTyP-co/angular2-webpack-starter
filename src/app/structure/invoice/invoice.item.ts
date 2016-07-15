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

  identifier (): number {
    return this.id;
  }

  set month (month: number) {
    this._month = month.valueOf() + 1;
  }

  get month (): number {
    return this._month;
  }

}
