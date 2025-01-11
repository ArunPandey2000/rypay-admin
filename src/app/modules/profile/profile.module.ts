import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { OverlayPanelComponent } from '../overlay-panel/overlay-panel.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WalletComponent } from './components/wallet/wallet.component';
import { WalletEditComponent } from './components/wallet-edit/wallet-edit.component';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';
import { ProfileService } from './services/profile.service';
import { CreateLoanComponent } from './components/create-loan/create-loan.component';

const routes: Routes = [
  {
    path: ':userid',
    component: ProfileComponent
  },
];

@NgModule({
  declarations: [ProfileComponent, CreateLoanComponent, ProfileEditComponent, WalletComponent, WalletEditComponent],
  providers: [ProfileService],
  imports: [RouterModule.forChild(routes), FormsModule, ReactiveFormsModule, CommonModule, CardComponent, LoaderComponent, AngularSvgIconModule, OverlayPanelComponent],
  exports: [RouterModule],
})
export class ProfileModule {}
