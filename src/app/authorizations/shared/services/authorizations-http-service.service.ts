import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from 'src/app/core/models/user.model.interface';
import { UserServiceService } from 'src/app/core/services/user-service.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'any'
})
export class AuthorizationsHttpServiceService {

    constructor(
        private http: HttpClient,
        private userService: UserServiceService
    ) {
    }

    register(form: FormGroup): Observable<User> {
        return this.http.post<User>(environment.api.register, {
            username: form.get('username').value,
            email: form.get('email').value,
            password: form.get('password').value
        });
    }

    login(form: FormGroup): Observable<User> {
        return this.http.post<User>(environment.api.login, {
            email: form.get('email').value,
            password: form.get('password').value
        }).pipe(
            tap((user: User) => {
                this.userService.setUser(user);
            })
        );
    }
}
