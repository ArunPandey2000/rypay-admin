import { Component } from '@angular/core';
import { toast } from 'ngx-sonner';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-announcements-tab',
  standalone: false,
  templateUrl: './announcements-tab.component.html',
  styleUrl: './announcements-tab.component.scss'
})
export class AnnouncementsTabComponent {
  title: string = '';
  description: string = '';
  announcements: string[] = [];

  constructor(private apiService: ApiService) {

  }
  async addAnnouncement() {
    if (this.description) {
      try{
        await this.apiService.post({
          url: 'notifications/announcement',
          body: {
            message: this.description
          }
        });
        this.announcements.push(this.description);
        this.description = '';
      } catch (err: any) {
        toast.error('Failed to send message', {
          position: 'bottom-right',
          description: err.message,
          action: {
            label: 'Undo',
            onClick: () => console.log('Action!'),
          },
          actionButtonStyle: 'background-color:#DC2626; color:white;'
      });
      }
    }
  }
}
