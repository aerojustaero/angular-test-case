import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, StorageService } from '@core/services';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'atc-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
    returnUrl!: string;
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    isLoggedIn$!: BehaviorSubject<boolean>;

    constructor(
        private authService: AuthService,
        private storageService: StorageService,
        private router: Router,
        private activatedRoute: ActivatedRoute) {
        this.isLoggedIn$ = this.storageService.getLogged();
    }

    ngOnInit(): void {
        if (this.storageService.isLoggedIn()) {
            this.isLoggedIn = true;
        }
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
        this.authService.login(this.loginForm.value).subscribe({
            next: data => {
                this.storageService.saveUser(data);
                this.storageService.setLogged(true);
                this.isLoginFailed = false;
                this.router.navigateByUrl(this.returnUrl);
            },
            error: err => {
                this.errorMessage = err.error.message;
                this.isLoginFailed = true;
            }
        });
    }
}
