import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'money',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('../money-request/money-request.module').then((m) => m.MoneyRequestModule),
  },
  { path: 'announcement',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('../announcements/announcements.module').then((m) => m.AnnouncementsModule)
  },
  { path: 'profile',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('../profile/profile.module').then((m) => m.ProfileModule)
  },
  {
    path: 'users',
    component: LayoutComponent ,
    canActivate: [AuthGuard],
    loadChildren: () => import('../uikit/uikit.module').then((m) => m.UikitModule),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  
  // { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
