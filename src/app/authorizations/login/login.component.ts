import { HttpErrorResponse } from '@angular/common/http';
import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model.interface';
import { AuthorizationsHttpServiceService } from '../shared/services/authorizations-http-service.service';
import { LoadingService } from '../shared/services/loading.service';
import { LoginFormService } from '../shared/services/login-form.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {

    public loginForm: FormGroup;
    public error: string;
    public localStorage: WindowLocalStorage;
    public user: User;

    constructor(
        private loginFormService: LoginFormService,
        private authorizationsHttpService: AuthorizationsHttpServiceService,
        private routerService: Router,
        public loading: LoadingService
    ) { }

    ngOnInit() {
        this.loginForm = this.loginFormService.build();

    }

    ngOnDestroy() {
        this.ionViewDidLeave();
    }

    ionViewDidLeave() {
        this.loginForm = this.loginFormService.build();
    }

    login(): void {
        this.authorizationsHttpService.login(this.loginForm).subscribe(
            (user: User) => {
                this.routerService.navigate(['/contacts', 'dashboard']);
            },
            (error: string) => {
                this.error = error;
            }
        );
    }

}
