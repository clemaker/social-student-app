import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {RegisterFormServiceService} from 'src/app/authorizations/shared/services/register-form-service.service';
import {AuthorizationsHttpServiceService} from 'src/app/authorizations/shared/services/authorizations-http-service.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {

    public validationsForm: FormGroup;
    public error: HttpErrorResponse;

    constructor(
        private registerFormService: RegisterFormServiceService,
        private authorizationsHttpService: AuthorizationsHttpServiceService,
        private routerService: Router
    ) {
    }

    ngOnInit() {
        this.validationsForm = this.registerFormService.build();
    }

    ngOnDestroy() {
        this.ionViewDidLeave();
    }

    ionViewDidLeave() {
        this.validationsForm = this.registerFormService.build();
    }

    register() {
        this.authorizationsHttpService.register(this.validationsForm).subscribe(
            () => {
                this.routerService.navigate(['/auth', 'login']);
            },
            (error: HttpErrorResponse) => {
                this.error = error;
            }
        );
    }

}
