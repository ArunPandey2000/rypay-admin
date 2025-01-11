import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { DateRangePickerComponent } from '../date-range-picker/date-range-picker.component';
import { DateRange } from '../date-range-picker/date-range.model';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { HeaderFilter } from './header-filter.interface';
import { RequestType } from './request-type.interface';

@Component({
  selector: 'app-header-filter',
  imports: [DateRangePickerComponent, NgIf, NgFor, AngularSvgIconModule, SearchBarComponent],
  templateUrl: './header-filter.component.html',
  styleUrl: './header-filter.component.scss'
})
export class HeaderFilterComponent {
  @Input() title: string = '';
  @Input() types: RequestType[] = [];
  @Output() headerFilter = new EventEmitter<HeaderFilter>();
  filter: HeaderFilter = {
    search: '',
    from: new Date('01-01-1990'),
    to: new Date(),
    sort: 'DESC',
    type: ''
  };
  onSearchChange(search: string) {
    this.filter.search = search;
    this.headerFilter.emit(this.filter);
  }

  onTypeChange(event: any) {
    this.filter.type = event.target?.value;
    this.headerFilter.emit(this.filter);
  }

  onSortChange(event: any) {
    this.filter.sort = event.target?.value;
    this.headerFilter.emit(this.filter);
  }

  selectRange(range: DateRange) {
    this.filter.to = range.to;
    this.filter.from = range.from;
    this.headerFilter.emit(this.filter);
  }
}
