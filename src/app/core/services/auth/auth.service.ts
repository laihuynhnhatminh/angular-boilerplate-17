import { Injectable } from '@angular/core';
import { storage } from '@shared/utils';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public isAuthenticated$ = new BehaviorSubject<boolean>(
    !!storage.getItem('appSession')
  );

  get isAuthenticated(): boolean {
    return this.isAuthenticated$.getValue();
  }

  public login(): void {
    storage.setItem('appSession', {
      user: 'fakeUser',
      token: 'fakeToken',
    });
    this.isAuthenticated$.next(true);
  }

  public logout(): void {
    storage.removeItem('appSession');
    this.isAuthenticated$.next(false);
  }
}
