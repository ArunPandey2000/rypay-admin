import { NgClass } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSonnerToaster } from 'ngx-sonner';
import { ThemeService } from './core/services/theme.service';
import { JwtInterceptor } from './modules/auth/interceptors/auth.interceptor';
import { ResponsiveHelperComponent } from './shared/components/responsive-helper/responsive-helper.component';
import { GlobalDataService } from './core/services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  imports: [NgClass, RouterOutlet, ResponsiveHelperComponent, NgxSonnerToaster],
})
export class AppComponent {
  title = 'rypay-admin';
  constructor(public themeService: ThemeService, private globalUser: GlobalDataService) {
    const localProfile = localStorage.getItem('profile');
    const userData = localProfile ? JSON.parse(localProfile) : null;
    this.globalUser.setProfile(userData);
  }

}
