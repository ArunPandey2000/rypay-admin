import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class PaginationComponent {
  @Input() currentPage: number = 1; 
  @Input() totalPages: number = 1;
  visiblePages: (number | string)[] = [];
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {
    this.updateVisiblePages();
  }

  ngOnChanges() {
    this.updateVisiblePages();
  }

  updateVisiblePages() {
    const firstPages = [1, 2]; // Always show the first 2 pages
    const lastPages = [this.totalPages - 1, this.totalPages]; // Always show the last 2 pages

    let pages: (number | string)[] = [...firstPages];
    
    if (this.totalPages > 4) {
      if (this.currentPage > 4) {
        pages.push('...');
      }

      const currentPages = [];
      if (this.currentPage > 2 && this.currentPage < this.totalPages - 1) {
        currentPages.push(this.currentPage - 1);
        currentPages.push(this.currentPage);
        currentPages.push(this.currentPage + 1);
      } else {
        currentPages.push(this.currentPage);
      }

      pages = [...pages, ...currentPages];
      if (this.currentPage < this.totalPages - 2) {
        pages.push('...');
      }
    }

    pages = [...pages, ...lastPages];

    // Remove duplicates and sort
    this.visiblePages = Array.from(new Set(pages)).sort((a, b) => (typeof a === 'number' ? a : 0) - (typeof b === 'number' ? b : 0));
  }


  get disablePrevious(): boolean {
    return this.currentPage === 1;
  }

  get disableNext(): boolean {
    return this.currentPage === this.totalPages;
  }

  goToPrevious() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateVisiblePages();
      this.pageChange.emit(this.currentPage);
    }
  }

  goToNext() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateVisiblePages();
      this.pageChange.emit(this.currentPage);
    }
  }

  goToPage(page: number | string) {
    if (typeof page === 'number') {
        if (page >= 1 && page <= this.totalPages) {
            this.currentPage = page;
            this.pageChange.emit(this.currentPage);
          }
    }
  }
}
