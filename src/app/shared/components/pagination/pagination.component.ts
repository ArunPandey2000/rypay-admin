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
    const firstPages = [1, 2]; // Always include the first two pages if available
    const lastPages = [this.totalPages - 1, this.totalPages]; // Always include the last two pages if available
    let pages: (number | string)[] = [];

    if (this.totalPages <= 5) {
      // If total pages are 5 or less, show all pages
      pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    } else {
      // Include the first two pages
      pages = [...firstPages];

      // Add ellipsis after the first two pages if the current page is far enough
      if (this.currentPage > 4) {
        pages.push('...');
      }

      // Include the pages around the current page
      const start = Math.max(3, this.currentPage - 1); // Ensure it starts at 3 or higher
      const end = Math.min(this.totalPages - 2, this.currentPage + 1); // Ensure it ends before the last 2 pages
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      // Add ellipsis before the last two pages if the current page is far enough
      if (this.currentPage < this.totalPages - 3) {
        pages.push('...');
      }

      // Include the last two pages
      pages = [...pages, ...lastPages];
    }

    // Remove duplicates and sort the pages array properly
    this.visiblePages = Array.from(new Set(pages)).sort((a, b) =>
      typeof a === 'number' && typeof b === 'number' ? a - b : 0
    );
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
    if (typeof page === 'number' && page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateVisiblePages();
      this.pageChange.emit(this.currentPage);
    }
  }
}

