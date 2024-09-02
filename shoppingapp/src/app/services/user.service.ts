import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  isAuthenticated: boolean = false;

  checkAuthentication() {
    this.isAuthenticated = true;
  }

  getAuthentication() {
    return this.isAuthenticated;
  }
}
