import {List} from '../list.interface';
import {PaymentItem} from './payment.item';

export class PaymentList implements List {
  id: number;
  data: Map<any, PaymentItem>;
  size: number = this.data.size;

  identifier (): number {
    return this.id;
  }

  get (key: any): PaymentItem {
    return this.data.get(key);
  }

  set (key: any, value: PaymentItem) {
    this.data.set(key, value);
  }

  has (key: any): boolean {
    return this.data.has(key);
  }

  delete (key: any): boolean {
    return this.data.delete(key);
  }

  getFirst (): PaymentItem {
    return this.data.entries().next().value;
  }

  getByMonth (month: number): PaymentList {
    let list = new this;
    for (let [key, value] of this.data) {
      if (month === value.month) {
        list.set(key, value);
      }
    }
    return list;
  }

}
