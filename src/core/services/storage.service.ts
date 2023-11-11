import { BehaviorSubject } from 'rxjs'
import { Injectable } from '@angular/core';
import { IUser } from '@core/models/user';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

private isLoggedInSource = new BehaviorSubject<boolean>(false);

  constructor() {}

  clean(): void {
    window.sessionStorage.clear();
    this.isLoggedInSource.next(false);
  }

  public saveUser(user: IUser): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    this.isLoggedInSource.next(true);
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  getLogged() {
    return this.isLoggedInSource;
  }

  setLogged(isLogged: boolean) {
    return this.isLoggedInSource.next(isLogged);
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }
}
