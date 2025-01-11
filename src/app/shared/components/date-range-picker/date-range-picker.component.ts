import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';
import { DateRange } from './date-range.model';

@Component({
  selector: 'app-date-range-picker',
  imports: [FormsModule, NgIf, ClickOutsideDirective],
  templateUrl: './date-range-picker.component.html',
  styleUrl: './date-range-picker.component.scss'
})
export class DateRangePickerComponent {
  showPicker: boolean = false; // Controls visibility of the date picker overlay
  customFrom: Date = new Date();
  customTo: Date = new Date();

  selectedRange: DateRange = { from: new Date(), to: new Date() };

  @Output() rangeSelected = new EventEmitter<DateRange>;

  togglePicker() {
    this.showPicker = !this.showPicker; // Toggles the visibility
  }

  selectOption(option: string) {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    let from: Date = new Date();
let to: Date = new Date();
debugger;
switch (option) {
  case 'today':
    from = new Date(); // Start of today
    from.setHours(0, 0, 0, 0); // Set to 00:00:00
    to = new Date(); // End of today
    to.setHours(23, 59, 59, 999); // Set to 23:59:59
    break;

  case 'yesterday':
    from = new Date(); // Start of yesterday
    from.setDate(from.getDate() - 1);
    from.setHours(0, 0, 0, 0); // Set to 00:00:00
    to = new Date(); // End of yesterday
    to.setDate(to.getDate() - 1);
    to.setHours(23, 59, 59, 999); // Set to 23:59:59
    break;

  case 'lastWeek':
    from = new Date(); // Start of last week
    from.setDate(from.getDate() - 7);
    from.setHours(0, 0, 0, 0); // Set to 00:00:00
    to = new Date(); // End of today
    to.setHours(23, 59, 59, 999); // Set to 23:59:59
    break;

  case 'lastMonth':
    from = new Date(); // Start of last month
    from.setMonth(from.getMonth() - 1);
    from.setDate(1); // Set to the first day of the previous month
    from.setHours(0, 0, 0, 0); // Set to 00:00:00
    to = new Date(); // End of the previous month
    to.setMonth(to.getMonth() - 1);
    to.setDate(new Date(to.getFullYear(), to.getMonth() + 1, 0).getDate()); // Get last day of the previous month
    to.setHours(23, 59, 59, 999); // Set to 23:59:59
    break;

  case 'year':
    from = new Date(today.getFullYear(), 0, 1); // Start of the current year
    from.setHours(0, 0, 0, 0); // Set to 00:00:00
    to = new Date(today.getFullYear(), 11, 31); // End of the current year
    to.setHours(23, 59, 59, 999); // Set to 23:59:59
    break;
}


    this.selectedRange = {
      from: from,
      to: to,
    };

    console.log('Selected Range:', this.selectedRange);
    this.rangeSelected.emit(this.selectedRange);
    this.showPicker = false;
  }

  applyCustomRange() {
    if (this.customFrom && this.customTo) {
      this.selectedRange = {
        from: this.customFrom,
        to: this.customTo,
      };
      console.log('Custom Range:', this.selectedRange);

      // Close the picker after applying custom range
      this.rangeSelected.emit(this.selectedRange);
      this.showPicker = false;
    } else {
      alert('Please select valid dates.');
    }
  }
}
