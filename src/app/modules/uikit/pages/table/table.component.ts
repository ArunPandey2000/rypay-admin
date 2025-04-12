import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { toast } from 'ngx-sonner';
import { ApiService } from 'src/app/core/services/api.service';
import { TableActionComponent } from './components/table-action/table-action.component';
import { TableFooterComponent } from './components/table-footer/table-footer.component';
import { TableHeaderComponent } from './components/table-header/table-header.component';
import { TableRowComponent } from './components/table-row/table-row.component';
import { User } from './model/user.model';
import { TableFilterService } from './services/table-filter.service';
import { SearchBarComponent } from 'src/app/shared/components/search-bar/search-bar.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    AngularSvgIconModule,
    FormsModule,
    TableRowComponent,
    SearchBarComponent
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class UsersListComponent implements OnInit {
  users = signal<User[]>([]);
  search = signal<string>('');

  constructor(private apiService: ApiService, private filterService: TableFilterService) {

  }

  public toggleUsers(checked: boolean) {
    this.users.update((users) => {
      return users.map((user) => {
        return { ...user, selected: checked };
      });
    });
  }

  private handleRequestError(error: any) {
    const msg = 'An error occurred while fetching users. Loading dummy data as fallback.';
    toast.error(msg, {
      position: 'bottom-right',
      description: error.message,
      action: {
        label: 'Undo',
        onClick: () => console.log('Action!'),
      },
      actionButtonStyle: 'background-color:#DC2626; color:white;',
    });
  }

  async listUsers(search: string) {
    this.search.set(search);
    const res = await this.apiService.post({
      url: `user/list?search=${search}`});
    this.users.set(res.data?.map((user: any) => ({
      ...user,
      aadharNumber: user.aadharNumber?.replace(/(\d{4})(\d{4})(\d{4})/, '$1 $2 $3')
    })));
  }
  async ngOnInit() {
    this.listUsers('');
  }
}
