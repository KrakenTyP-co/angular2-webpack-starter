import {Item} from '../item.interface';
import {ValueItem} from '../value/value.item';
import {SocialInsuranceItem} from './social.insurance.item';
import {SecureInsuranceItem} from './secure.insurance.item';

export class PaymentItem implements Item {
  id: number = Math.random() * 100000000;
  valueItem: ValueItem;
  socialInsurance: SocialInsuranceItem;
  secureInsurance: SecureInsuranceItem;
  protected _month: number = 1;

  constructor () {

  }

  identifier (): number {
    return this.id;
  }

  get totalPrice (): number {
    return this.valueItem.price + this.socialInsurance.price + this.secureInsurance.price;
  }

  set month (month: number) {
    this._month = month + 1;
  }

  get month (): number {
    return this._month;
  }
}
