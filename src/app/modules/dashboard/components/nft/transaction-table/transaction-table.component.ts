import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HeaderFilterComponent } from "../../../../../shared/components/header-filter/header-filter.component";
import { Transaction } from '../../../models/transaction-data.model';
import { TransactionRowComponent } from '../transaction-row/transaction-row.component';
import { HeaderFilter } from 'src/app/shared/components/header-filter/header-filter.interface';
import { RequestType } from 'src/app/shared/components/header-filter/request-type.interface';
@Component({
    selector: 'transaction-table',
    templateUrl: './transaction-table.component.html',
    standalone: true,
    imports: [NgFor, TransactionRowComponent, HeaderFilterComponent, AngularSvgIconModule, HeaderFilterComponent],
})
export class TransactionTableComponent implements OnInit {
  @Input() transactions: Transaction[] = [];
  transactionsTypes: RequestType[] = [
      {
        label: 'All',
        value: ''
      },
      {
        label: 'CREDIT',
        value: 'CREDIT'
      },
      {
        label: 'DEBIT',
        value: 'DEBIT'
      },
    ]
  @Output() filterUpdated = new  EventEmitter<HeaderFilter>();
  constructor() {

  }

  ngOnInit(): void {}

}
