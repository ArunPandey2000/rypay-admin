import { NgClass, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { environment } from 'src/environments/environment';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { AuthService } from '../../services/auth.service';
import { GlobalDataService } from 'src/app/core/services/global.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, AngularSvgIconModule, NgClass, NgIf, ButtonComponent],
})
export class SignInComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  showOtpField = false;

  constructor(private readonly _formBuilder: FormBuilder,
    private authService: AuthService,
    private globalData: GlobalDataService,
     private readonly _router: Router) {}

  handleButton() {
    if (this.showOtpField) {
      this.authService.login(this.form.get('phoneNumber')?.value, this.form.get('otp')?.value).subscribe({
        next: (res) => {
          localStorage.setItem('profile', JSON.stringify(res.user));
          localStorage.setItem('tokens', JSON.stringify(res.tokens));
          localStorage.setItem('authToken', res.tokens.accessToken);
          this.globalData.setProfile(res.user);
          this._router.navigate(['/home'])
        },
        error: () => {
          this.showOtpField = true; // for now
        }
      })
    } else {
      this.authService.getOTP(this.form.get('phoneNumber')?.value).subscribe({
        next: (res) => {
          this.showOtpField = true;
        },
        error: () => {
          this.showOtpField = true; // for now
        }
      })
    }
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      phoneNumber: ['', [Validators.required, Validators.max(10)]],
      otp: ['', Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }
}
