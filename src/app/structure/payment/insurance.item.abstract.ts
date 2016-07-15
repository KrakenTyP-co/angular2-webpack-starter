import {Item} from '../item.interface';

export class InsuranceItem implements Item {
  id: number;
  price: number = 0.00;
  negativeValue: boolean = false;
  isWithTax: boolean = false;
  title: string = 'Insurance';
  description: string = 'TypeOfInsurance';

  constructor () {

  }

  identifier (): number {
    return this.id;
  }

  set priceWithTax(price: number) {
    this.price = price / 1.2;
  }

  get tax (): number {
    return this.price * 0.2;
  }
}
