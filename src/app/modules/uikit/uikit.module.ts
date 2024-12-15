import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UikitRoutingModule } from './uikit-routing.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularSvgIconModule.forRoot(),
    UikitRoutingModule,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class UikitModule { }
