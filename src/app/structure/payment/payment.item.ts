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

  identifier (): Number {
    return this.id;
  }

  get totalPrice (): Number {
    return this.valueItem.price + this.socialInsurance.price + this.secureInsurance.price;
  }

  set month (month: Number) {
    this._month = month + 1;
  }

  get month (): Number {
    return this._month;
  }
}
