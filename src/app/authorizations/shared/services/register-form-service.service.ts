import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RepeatedPasswordValidator} from '../validators/repeated-password.validator';

@Injectable({
    providedIn: 'root'
})
export class RegisterFormServiceService {

    constructor(
        private formBuilder: FormBuilder,
        private repeatedPasswordValidator: RepeatedPasswordValidator
    ) {
    }

    build(): FormGroup {
        return this.formBuilder.group({
                username: ['', Validators.required],
                email: ['', [Validators.required,
                    Validators.email,
                    Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
                password: ['', Validators.required],
                verifyPassword: ['', [Validators.required, this.repeatedPasswordValidator]],
            },
        );
    }
}
