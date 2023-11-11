import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Router } from '@angular/router';
import { IUser, UserLoginRequest } from '@core/models/user';
import { environment } from '@env/environment';
import { BehaviorSubject, ReplaySubject, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {

    baseUrl = environment.apiUrl;
    private currentUserSource = new BehaviorSubject<IUser | null>(null);
    currentUser$ = this.currentUserSource.asObservable();

    private tokenUserSource = new BehaviorSubject<string>('');
    token$ = this.tokenUserSource.asObservable();

    constructor(private http: HttpClient, private router: Router) { }

    // https://dummyjson.com/auth/login
    /**
     *
     * @param request {
    "username": "kminchelle",
    "password": "0lelplR"}
     * @returns
     */
    public login(request: UserLoginRequest) {
        return this.http.post<IUser>(this.baseUrl + 'auth/login', request);
    }

    public logout() {
        this.router.navigateByUrl('/auth/login');
    }
}
