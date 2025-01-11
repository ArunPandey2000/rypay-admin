import { Component, Input, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CommonModule } from '@angular/common';
import { MoneyRequestData } from '../../models/money-request-data.model';
import { Router } from '@angular/router';

@Component({
    selector: '[money-request-row]',
    templateUrl: './money-request-row.component.html',
    imports: [AngularSvgIconModule, CommonModule],
    standalone: true,
})
export class MoneyRequestRowComponent implements OnInit {
  constructor(private router: Router) {}
  @Input() moneyRequest!: MoneyRequestData;
  redirectToProfile() {
    this.router.navigate([`home/profile/${this.moneyRequest.userId}`])
  }
  ngOnInit(): void {}
}
