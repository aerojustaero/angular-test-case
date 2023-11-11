import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '@core/models/index.';
import { AuthService } from '@core/services';
import { ReplaySubject } from 'rxjs';

@Component({
    selector: 'atc-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
    returnUrl!: string;

    private currentUserSource = new ReplaySubject<IUser>(1);
    currentUser$ = this.currentUserSource.asObservable();

    constructor(
        private accountService: AuthService,
        private router: Router,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.returnUrl = this.activatedRoute.snapshot.queryParams?.['returnUrl'] || '/home';
        this.createLoginForm();
    }

    createLoginForm() {
        this.loginForm = new FormGroup({
          username: new FormControl('', [Validators.required]),
          password: new FormControl('', Validators.required),
        })
      }

      onSubmit() {
        this.accountService.login(this.loginForm.value).subscribe(() => {
          this.router.navigateByUrl(this.returnUrl);
        }, error => {
          console.log(error);
        })
      }
}
