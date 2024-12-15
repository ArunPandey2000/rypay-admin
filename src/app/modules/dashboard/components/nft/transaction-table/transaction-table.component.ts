import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TransactionRowComponent } from '../transaction-row/transaction-row.component';
import { Transaction } from '../../../models/transaction-data.model';

@Component({
    selector: 'transaction-table',
    templateUrl: './transaction-table.component.html',
    standalone: true,
    imports: [NgFor, TransactionRowComponent],
})
export class TransactionTableComponent implements OnInit {
  @Input() transactions: Transaction[] = [];
  constructor() {

  }

  ngOnInit(): void {}
}
