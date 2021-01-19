import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class LoginFormService {

    constructor(
        private formBuilder: FormBuilder
    ) {
    }

    build(): FormGroup {
        return this.formBuilder.group({
                email: ['', [Validators.required,
                    Validators.email,
                    Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
                password: ['', Validators.required]
            },
        );
    }
}
