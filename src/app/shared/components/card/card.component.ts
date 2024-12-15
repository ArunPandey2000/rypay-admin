import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class CardComponent {
  @Input() fullName: string = ''; 
  @Input() cardNumberLast4Dists: string = '';
  @Input() validity: string = '';
  @Input() expiry: string = '';

  get ExpiryDate() {
    if (this.expiry) {
        return this.expiry;
    }
    return new Date().setFullYear(new Date().getFullYear() + 24)
  }

  get ValidDate() {
    if (this.expiry) {
        return this.expiry;
    }
    return new Date()
  }
}
