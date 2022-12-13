import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';

import { environment } from 'src/environments/environment';
import { LocalStorageService } from '../services/local-storage/local-storage.service';

import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private localStorageService: LocalStorageService,
  ) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    if (environment.LOGIN_URL !== '') {
      const userAuth = await this.userAuth();
      return userAuth;
    }
    this.authService.defineDadosFake();
    return true;
  }

  async userAuth(): Promise<boolean> {
    if (this.authService.verifyExistsUserData()) {
      return true;
    }
    return await this.authService
      .autenticateUser()
      .toPromise()
      .then((userData) => {
        this.localStorageService.set('userData', userData);
        this.authService.defineUserDataCookie();
        return userData!.authenticated;
      })
      .catch((error) => {
        window.location.href = environment.LOGIN_URL;
        return false;
      });
  }
}
