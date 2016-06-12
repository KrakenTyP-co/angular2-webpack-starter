import {Item} from '../item.interface';

export class ValueItem implements Item {
  id: number = Math.random() * 100000000;
  price: number = 0.00;
  negativeValue: boolean = false;
  isWithTax: boolean = true;
  title: string = '';
  description: string = '';

  constructor () {

  }

  identifier (): Number {
    return this.id;
  }

  set priceWithTax(price: number) {
    this.price = price / 1.2;
  }

  get tax (): number {
    return this.price * 0.2;
  }
}
