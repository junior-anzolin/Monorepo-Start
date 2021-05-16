import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@Environment/environment';

const TOKEN_KEY = 'TOKEN';
const AUTH_FLAG = 'AUTHENTICATED';
const DATA_USUARIO = 'DATA_USER';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private router: Router, private http: HttpClient) {
    this.checkToken();
  }

  async checkToken() {
    const tokenKey = await localStorage.getItem(TOKEN_KEY);

    if (tokenKey) {
      localStorage.setItem(AUTH_FLAG, JSON.stringify(true));
    } else {
      localStorage.setItem(AUTH_FLAG, JSON.stringify(false));
      this.router.navigate(['/public/login']);
    }
  }

  login(authData: { email: string; password: string }) {
    return this.http.post(`${environment.auth}/login`, authData);
  }

  setToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
  }

  async logout() {
    await localStorage.removeItem(TOKEN_KEY);
    await localStorage.removeItem(AUTH_FLAG);
    this.checkToken();
  }

  get authenticated(): boolean {
    const flag = localStorage.getItem(AUTH_FLAG);
    return flag ? JSON.parse(flag) : null;
  }
}
