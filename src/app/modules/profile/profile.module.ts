import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/shared/components/card/card.component';

const routes: Routes = [
  {
    path: ':userid',
    component: ProfileComponent
  },
];

@NgModule({
  declarations: [ProfileComponent],
  imports: [RouterModule.forChild(routes), CommonModule, CardComponent],
  exports: [RouterModule],
})
export class ProfileModule {}
