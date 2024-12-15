import { NgModule } from '@angular/core';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

@NgModule({ imports: [AuthRoutingModule, AngularSvgIconModule.forRoot()], providers: [provideHttpClient(withInterceptorsFromDi()), AuthService, AuthGuard, LoginGuard] })
export class AuthModule {}
