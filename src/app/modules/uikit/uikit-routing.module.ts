import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UikitComponent } from './uikit.component';
import { UsersListComponent } from './pages/table/table.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

const routes: Routes = [
  {
    path: '',
    component: UikitComponent,
    children: [
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      { path: 'users', component: UsersListComponent },
      { path: '**', redirectTo: 'errors/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), AngularSvgIconModule.forRoot()],
  exports: [RouterModule],
})
export class UikitRoutingModule {}
