import { Injectable } from '@angular/core';
// RXJS
import { BehaviorSubject } from 'rxjs';
import { PROFILE } from '../models/profile.model';
@Injectable({
  providedIn: 'root',
})
export class GlobalDataService {
  currentUser$ = new BehaviorSubject<PROFILE | null>(null);
  constructor() {}

  setProfile(user: PROFILE | null) {
    this.currentUser$.next(user);
  }
}