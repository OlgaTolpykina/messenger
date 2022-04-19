import { tap } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  AuthResponseModel,
  LoginRequestModel,
  RegisterRequestModel,
} from '../model/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(payload: RegisterRequestModel) {
    console.log(payload);
    return this.http
      .post<AuthResponseModel>('/auth/register', payload)
      .pipe(tap((response) => this.handleResponse(response)));
  }

  login(payload: LoginRequestModel) {
    return this.http
      .post<AuthResponseModel>('/auth/login', payload)
      .pipe(tap((response) => this.handleResponse(response)));
  }

  private handleResponse(response: AuthResponseModel) {
    localStorage.setItem('token', response.token);
  }
}
