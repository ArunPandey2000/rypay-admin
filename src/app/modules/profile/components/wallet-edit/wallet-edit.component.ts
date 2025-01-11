import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { Wallet } from '../../model/wallet.model';

@Component({
  selector: 'app-wallet-edit',
  standalone: false,
  templateUrl: './wallet-edit.component.html',
  styleUrl: './wallet-edit.component.scss'
})
export class WalletEditComponent {
  amount: number = 0;
  showLoader = false;
  @Input({required: true}) userId!: string;
  @Output() closeOverlay = new EventEmitter<Wallet>();
  message: string = '';

  constructor(private apiService: ApiService) {

  }
  async updateBalance(type: 'CREDIT' | 'DEBIT') {
    try {
      this.showLoader = true
      const response = await this.apiService.post({
        url: `wallet/update-money/${this.userId}`,
        body: {
          amount: this.amount,
          message: this.message,
          type: type
        }
      })
      this.showLoader = false
      this.closeOverlay.emit(response.data);

    } catch(err) {
      this.showLoader = false
    }
  }
}
