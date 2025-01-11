import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-create-loan',
  standalone: false,
  templateUrl: './create-loan.component.html',
  styleUrl: './create-loan.component.scss'
})
export class CreateLoanComponent {
  @Input() userId!: string;
  @Output() closeOverlay = new EventEmitter();
  installmentAmount: number = 0;
  dueDate: Date = new Date();
  loanAccountNumber: string = ''
  totalAmount: number = 10000;
  showLoader = false;

  constructor(private apiService: ApiService) {
  
    }
    async createLoan() {
      try {
        this.showLoader = true
        const response = await this.apiService.post({
          url: `loans`,
          body: {
            installmentAmount: this.installmentAmount,
            loanId: this.loanAccountNumber,
            installmentDate: this.dueDate,
            totalAmount: this.totalAmount, 
            userId: this.userId
          }
        })
        this.showLoader = false
        this.closeOverlay.emit();
  
      } catch(err) {
        this.showLoader = false
      }
    }
}
