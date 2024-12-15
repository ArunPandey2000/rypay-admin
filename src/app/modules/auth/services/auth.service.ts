import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'authToken';

  constructor(private http: HttpClient, private router: Router) {}

  login(phoneNumber: string, otp: string) {
    return this.http.post(`${environment.baseUrl}/auth/validate-otp`, { phoneNumber, otp }).pipe(
      tap((response: any) => {
        localStorage.setItem(this.tokenKey, response.tokens.accessToken);
      })
    );
  }

  getOTP(phone: string) {
    return this.http.post(`${environment.baseUrl}/auth/request-otp`, { phone });
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    if (token && !this.isTokenExpired(token)) {
      return true;
    }
    this.logout();
    return false;
  }

  private isTokenExpired(token: string): boolean {
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      const now = Math.floor(Date.now() / 1000);
      return decoded.exp ? decoded.exp < now : true;
    } catch (error) {
      return true; // Treat invalid tokens as expired
    }
  }
}
