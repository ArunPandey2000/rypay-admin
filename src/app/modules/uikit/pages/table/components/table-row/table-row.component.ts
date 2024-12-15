import { Component, Input } from '@angular/core';
import { User } from '../../model/user.model';
import { FormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Router } from '@angular/router';

@Component({
  selector: '[app-table-row]',
  standalone: true,
  imports: [FormsModule, AngularSvgIconModule],
  templateUrl: './table-row.component.html',
  styleUrl: './table-row.component.scss',
})
export class TableRowComponent {
  @Input() user: User = <User>{};

  constructor(private router: Router) {}

  redirectToProfile() {
    debugger
    this.router.navigate([`home/profile/${this.user.userid}`])
  }
}
