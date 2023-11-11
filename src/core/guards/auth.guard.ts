import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { StorageService } from '@core/services';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private storageService: StorageService, private router: Router) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.storageService.getLogged().pipe(
            map(auth => {
              if (auth) {
                return true;
              }
              this.router.navigate(['auth/login'], {queryParams: {returnUrl: state.url}})
              return false;
            })
          )
    }
}
