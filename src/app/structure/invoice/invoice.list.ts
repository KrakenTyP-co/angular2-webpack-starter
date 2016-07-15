import {List} from '../list.interface';
import {InvoiceItem} from './invoice.item';

export class InvoiceList implements List {
  id: number;
  data: Map<any, InvoiceItem> = new Map<any, InvoiceItem>();
  size: number = this.data.size;

  constructor () {
  }

  identifier (): number {
    return this.id;
  }

  get (key: any): InvoiceItem {
    return this.data.get(key);
  }

  set (key: any, value: InvoiceItem) {
    this.data.set(key, value);
  }

  has (key: any): boolean {
    return this.data.has(key);
  }

  delete (key: any): boolean {
    return this.data.delete(key);
  }

  getFirst (): [any, InvoiceItem] {
    return this.data.entries().next().value;
  }


  getByMonth (month: number): InvoiceList {
    let list = new InvoiceList();
    this.data.forEach((value, key) => {
      if (month === value.month) {
        list.set(key, value);
      }
    });

    return list;
  }
}
