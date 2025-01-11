import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule, NgIf],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  @Input() searchQuery: string = '';

  @Output() search = new EventEmitter<string>();

  onSearch() {
    this.search.emit(this.searchQuery);
  }

  clearSearch() {
    this.searchQuery = '';
    this.search.emit(this.searchQuery);
  }
}
