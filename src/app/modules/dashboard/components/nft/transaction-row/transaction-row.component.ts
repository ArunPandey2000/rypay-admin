import { Component, Input, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Transaction } from '../../../models/transaction-data.model';
import { CommonModule } from '@angular/common';

@Component({
    selector: '[dashboard-transaction-row]',
    templateUrl: './transaction-row.component.html',
    imports: [AngularSvgIconModule, CommonModule],
    standalone: true,
})
export class TransactionRowComponent implements OnInit {
  constructor() {}
  @Input() transaction!: Transaction;
  ngOnInit(): void {}
}
