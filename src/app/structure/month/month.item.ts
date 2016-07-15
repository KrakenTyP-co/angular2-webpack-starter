import {Item} from '../item.interface';
import {InvoiceList} from '../invoice/invoice.list';

export class MonthItem implements Item {
  id: number = new Date().getMonth() + 1;
  invoiceList: InvoiceList;

  constructor () {

  }

  identifier (): number {
    return this.id;
  }
}
