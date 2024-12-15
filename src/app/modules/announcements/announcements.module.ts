import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SmsTabComponent } from './components/sms-tab/sms-tab.component';
import { AnnouncementsTabComponent } from './components/announcements-tab/announcements-tab.component';
import { AnnouncementsComponent } from './announcements.component';
import { AnnouncementRoutingModule } from './announcements-routing.module';



@NgModule({
  declarations: [SmsTabComponent, AnnouncementsComponent, AnnouncementsTabComponent],
  imports: [
    AnnouncementRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class AnnouncementsModule { }
