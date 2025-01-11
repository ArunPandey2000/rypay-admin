import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoneyRequestDashboardComponent } from './money-request.component';
import { MoneyRequestComponent } from './pages/money-request/money-request.component';

const routes: Routes = [
  {
    path: '',
    component: MoneyRequestDashboardComponent,
    children: [
      { path: '', redirectTo: 'money-request', pathMatch: 'full' },
      { path: 'money-request', component: MoneyRequestComponent },
      { path: '**', redirectTo: 'errors/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoneyRequestRoutingModule {}
