import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Router } from '@angular/router';
import { IUser, UserLoginRequest } from '@core/models/user';
import { environment } from '@env/environment';
import { ReplaySubject, map} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
    baseUrl = environment.apiUrl;
    private currentUserSource = new ReplaySubject<IUser>(1);
    currentUser$ = this.currentUserSource.asObservable();

    constructor(private http: HttpClient, private router: Router) { }

    public login(request: UserLoginRequest) {
        return this.http.post<IUser>(this.baseUrl + 'auth/login', request).pipe(
            map((user: IUser) => {
                if (user) {
                    localStorage.setItem('token', user.token);
                    this.currentUserSource.next(user);
                }
            })
        );
    }

    public logout() {
        localStorage.removeItem('token');
        this.currentUserSource.complete();
        this.router.navigateByUrl('/auth/login');
    }
}
