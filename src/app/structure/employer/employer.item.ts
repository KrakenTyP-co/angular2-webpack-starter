import {Item} from '../item.interface';
import {PaymentList} from '../payment/payment.list';

export class EmployerItem implements Item {
  id: number = Math.random() * 100000000;
  title: string   = '';
  name: string    = '';
  surname: string = '';
  paymentList: PaymentList;

  constructor () {

  }

  identifier (): Number {
    return this.id;
  }

}
