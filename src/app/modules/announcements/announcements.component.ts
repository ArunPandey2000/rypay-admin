import { Component } from '@angular/core';

@Component({
  selector: 'app-announcements',
  standalone: false,
  templateUrl: './announcements.component.html',
  styleUrl: './announcements.component.scss'
})
export class AnnouncementsComponent {
  currentTab: string = 'announcements';

  setTab(tab: string) {
    this.currentTab = tab;
  }
}
