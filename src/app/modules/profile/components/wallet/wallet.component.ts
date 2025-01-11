import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { Wallet } from '../../model/wallet.model';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-wallet',
  standalone: false,
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.scss'
})
export class WalletComponent {
  @Input({required: true}) userId!: string;
  lastUpdatedTime!: Date;
  walletData!: Wallet
  @Output() openEditOverlay = new EventEmitter();

  constructor(private apiService: ApiService, private profileService: ProfileService) {
  }

  ngOnInit() {
    this.profileService.balanceUpdated.subscribe((wallet) => {
      debugger
      this.walletData = wallet;
    });
    this.refreshBalance();
  }

  async refreshBalance() {
    this.lastUpdatedTime = new Date();
    try {
      const response = await this.apiService.get({
        url: `wallet/user/${this.userId}`
      });
      this.walletData = response.data;
    } catch(ex) {

    }
  }
}
