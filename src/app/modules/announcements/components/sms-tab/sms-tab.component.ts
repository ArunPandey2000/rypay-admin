import { Component } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-sms-tab',
  templateUrl: './sms-tab.component.html',
  standalone: false,
  styleUrl: './sms-tab.component.scss'
})
export class SmsTabComponent {
  phoneNumber: string = '';
  message: string = '';
  status: string = '';

  constructor(private apiService: ApiService) {}

  sendSms() {
    // const smsPayload = { to: this.phoneNumber, message: this.message };

    // this.http.post('http://localhost:3000/send-sms', smsPayload).subscribe(
    //   (response) => {
    //     this.status = 'SMS sent successfully!';
    //     this.phoneNumber = '';
    //     this.message = '';
    //   },
    //   (error) => {
    //     this.status = 'Failed to send SMS.';
    //     console.error(error);
    //   }
    // );
  }
}
