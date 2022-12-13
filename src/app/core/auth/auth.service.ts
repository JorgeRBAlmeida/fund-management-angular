import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { environment } from 'src/environments/environment';
import { UserInterface } from '../models/user.model';
import { LocalStorageService } from '../services/local-storage/local-storage.service';


@Injectable({ providedIn: 'root' })
export class AuthService {
  userData?: UserInterface;
  baseHrefApp?: string

  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  autenticateUser(): Observable<UserInterface> {
    return this.httpClient.get<UserInterface>(
      environment.API_LOGIN + 'auth/',
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }),
        withCredentials: true,
      }
    );
  }

  defineUserDataCookie() {
    const userDataCookie = JSON.parse(
      this.localStorageService.get('userData')
    );

    if (userDataCookie) {
      this.userData = new UserInterface().deserializer(
        userDataCookie
      );
    }
  }

  verifyExistsUserData(): boolean {
    if (this.userData) {
      return true;
    } else if (JSON.parse(this.localStorageService.get('userData'))) {
      this.defineUserDataCookie();
      return true;
    }
    return false;
  }

  defineDadosFake() {
    if (this.verifyExistsUserData()) {
      return;
    }
    const userDataFake = {
      token:
        '08fd4d586e35d212d8d42920ead1326ca30daccf9d906f882564027c3ab5d09596c27b063f14edc11fcfc503fc322ed5563d4523b5adbc96de3665a7a91ccd18',
      type: 'Bearer',
      id: 'X5435677',
      userName: 'Andrew Smith',
      authenticated: true,
    };
    this.localStorageService.set('userData', userDataFake);
    this.defineUserDataCookie();
  }
}
