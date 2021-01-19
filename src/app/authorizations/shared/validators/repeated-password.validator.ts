import {Directive, Injectable} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {Subscription} from 'rxjs';

@Injectable({
    providedIn: 'root',
})

@Directive({
    selector: '[appRepeatedPassword]',
    providers: [{provide: NG_VALIDATORS, useExisting: RepeatedPasswordValidator, multi: true}]
})
export class RepeatedPasswordValidator implements Validator {

    private password: Subscription;

    constructor() {
    }

    validate(control: AbstractControl): ValidationErrors | null {
        if (!control.dirty) {
            if (this.password) {
                this.password.unsubscribe();
                this.password = null;
            }
            return null;
        }
        if (!this.password) {
            this.password = control.root.get('password').valueChanges.subscribe(() => {
                control.updateValueAndValidity();
            });
        }
        if (control.root.get('password').value === control.value) {
            return null;
        }
        return {repeatedPassword: true};
    }

}
