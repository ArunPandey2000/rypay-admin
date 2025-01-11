import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { PaginationComponent } from 'src/app/shared/components/pagination/pagination.component';
import { HeaderFilter } from 'src/app/shared/components/header-filter/header-filter.interface';
import { MoneyRequestData } from '../../models/money-request-data.model';
import { MoneyRequestHeaderComponent } from '../../components/money-request-header/money-request-header.component';
import { MoneyRequestTableComponent } from '../../components/money-request-table/money-request-table.component';

@Component({
    selector: 'app-money-request',
    templateUrl: './money-request.component.html',
    standalone: true,
    imports: [
    MoneyRequestHeaderComponent,
    PaginationComponent,
    MoneyRequestTableComponent],
})
export class MoneyRequestComponent implements OnInit {

  search = '';
  fromDate = new Date();
  toDate = new Date();
  sortDirection = 'ASC';
  status = '';
  totalPages = 1;
  page = 1;
  transactions: MoneyRequestData[] = [];

  constructor(private apiService: ApiService) {
    const sevenDays = 180 * 24 * 60 * 60 * 1000;
    this.fromDate = new Date(this.fromDate.setTime(this.fromDate.getTime() - sevenDays ))
  }

  getPayload() {
    return {
      "pagination": {
        "page": this.page,
        "pageSize": 10
      },
      "fromDate": this.fromDate,
      "toDate": this.toDate,
      "search": this.search,
      "sortDirection": this.sortDirection,
      "status": this.status,
    }
  }

  async ngOnInit() {
    debugger
    this.handleFilter();
  }

  updateResult(filter: HeaderFilter) {
    this.search = filter.search;
    this.toDate = filter.to;
    this.fromDate = filter.from;
    this.sortDirection = filter.sort;
    this.status = filter.type;
    this.page = 1;
    this.handleFilter();
  }

  async handleFilter() {
    const result = await this.apiService.post({
      url: 'money-request/list',
      body: this.getPayload()
    })
    this.transactions = result.data.data;
    this.page = result.data.pagination.page;
    this.totalPages = result.data.pagination.pageCount;
  }
  onPageChange(pageNumber: number) {
    this.page = pageNumber;
    this.handleFilter();
  }
}
