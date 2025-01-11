import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-money-request',
    templateUrl: './money-request.component.html',
    standalone: true,
    imports: [RouterOutlet],
})
export class MoneyRequestDashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
