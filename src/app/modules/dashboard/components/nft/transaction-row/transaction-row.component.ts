import { Component, Input, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Transaction } from '../../../models/transaction-data.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: '[dashboard-transaction-row]',
    templateUrl: './transaction-row.component.html',
    imports: [AngularSvgIconModule, CommonModule],
    standalone: true,
})
export class TransactionRowComponent implements OnInit {
  constructor(private router: Router) {}
  @Input() transaction!: Transaction;
  ngOnInit(): void {}
  redirectToProfile() {
    this.router.navigate([`home/profile/${this.transaction.user.id}`])
  }
}
