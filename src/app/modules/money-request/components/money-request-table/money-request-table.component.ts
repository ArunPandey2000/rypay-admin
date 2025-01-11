import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HeaderFilter } from 'src/app/shared/components/header-filter/header-filter.interface';
import { HeaderFilterComponent } from 'src/app/shared/components/header-filter/header-filter.component';
import { MoneyRequestRowComponent } from '../money-request-row/money-request-row.component';
import { MoneyRequestData } from '../../models/money-request-data.model';
import { RequestType } from 'src/app/shared/components/header-filter/request-type.interface';
@Component({
    selector: 'money-request-table',
    templateUrl: './money-request-table.component.html',
    standalone: true,
    imports: [NgFor, MoneyRequestRowComponent, HeaderFilterComponent, AngularSvgIconModule, HeaderFilterComponent],
})
export class MoneyRequestTableComponent implements OnInit {
  @Input() moneyRequests: MoneyRequestData[] = [];
  moneyRequestTypes: RequestType[] = [
    {
      label: 'All',
      value: ''
    },
    {
      label: 'Requested',
      value: 'Requested'
    },
    {
      label: 'Rejected',
      value: 'Rejected'
    },
    {
      label: 'Paid',
      value: 'Paid'
    },
  ]
  @Output() filterUpdated = new  EventEmitter<HeaderFilter>();
  constructor() {

  }

  ngOnInit(): void {}

}
