import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, Signal, WritableSignal } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { User } from '@app/auth/models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private _httpClient = inject(HttpClient);
  private _hasOnboarding: WritableSignal<boolean> = signal(false);

  get hasOnboarding(): Signal<boolean> {
    return this._hasOnboarding;
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  private _user: WritableSignal<User | null> = signal(null);

  get user(): Signal<User | null> {
    return this._user;
  }

  //**
  // * Setter & getter for hasOnboarding

  /**
   * Setter & getter for user
   *
   * @param value
   */
  set user(value: User) {
    // Store the value
    this._user.set(value);
  }

  // */
  set setOnboarding(value: boolean) {
    localStorage.setItem('hasOnboarding', 'true');
    this._hasOnboarding.set(value);
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Get the current signed-in user data
   */
  get(): Observable<User> {
    return this._httpClient.get<User>('api/common/user').pipe(
      tap((user) => {
        this._user.set(user);
      }),
    );
  }

  /**
   * Update the user
   *
   * @param user
   */
  update(user: User): Observable<any> {
    return this._httpClient.patch<User>('api/common/user', { user }).pipe(
      map((response) => {
        this._user.set(response);
      }),
    );
  }

  checkOnboarding(): Observable<boolean> {
    // Check if the user has completed the onboarding
    if (this._hasOnboarding()) {
      return of(true);
    }

    // If not, return false
    return of(false);
  }
}
