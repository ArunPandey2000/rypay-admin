import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { TransactionHeaderComponent } from '../../components/nft/dashboard-header/dashboard-header.component';
import { TransactionTableComponent } from '../../components/nft/transaction-table/transaction-table.component';
import { Transaction } from '../../models/transaction-data.model';
import { PaginationComponent } from 'src/app/shared/components/pagination/pagination.component';

@Component({
    selector: 'app-transactions',
    templateUrl: './transactions.component.html',
    standalone: true,
    imports: [
    TransactionHeaderComponent,
    PaginationComponent,
    TransactionTableComponent],
})
export class transactionsComponent implements OnInit {

  search = '';
  fromDate = new Date();
  toDate = new Date();
  sortDirection = 'ASC';
  totalPages = 1;
  page = 1;
  transactions: Transaction[] = [];

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
      "sortDirection": this.sortDirection
    }
  }

  async ngOnInit() {
    this.handleFilter();
  }

  async handleFilter() {
    const result = await this.apiService.post({
      url: 'transactions/all',
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
