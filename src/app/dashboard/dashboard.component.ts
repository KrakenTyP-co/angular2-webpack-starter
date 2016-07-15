import { Component, OnInit } from '@angular/core';
import { MonthItem } from '../structure/month/month.item';
import { InvoiceList } from '../structure/invoice/invoice.list';
import { InvoiceItem } from '../structure/invoice/invoice.item';
import { MapValuesPipe } from '../iterable.pipe';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.html',
  styles:   [<string>require('./dashboard.scss')],
  pipes:    [MapValuesPipe]
})
export class Dashboard implements OnInit {
  private monthItem: MonthItem;

  constructor () {
  }

  ngOnInit () {
    this.monthItem             = new MonthItem();
    this.monthItem.invoiceList = new InvoiceList();

    let invoice   = new InvoiceItem();
    invoice.title = 'Some dirty title';

    this.monthItem.invoiceList.set(invoice.identifier(), invoice);
  }
}
