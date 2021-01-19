import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {User} from '../models/user.model.interface';

@Injectable({
    providedIn: 'root'
})
export class UserServiceService {

    private user: User;

    constructor() {
        const user = window.localStorage.getItem(environment.storage.user);
        if (user) {
            this.user = JSON.parse(user);
        }
    }

    setUser(user: User): void {
        window.localStorage.setItem(environment.storage.user, JSON.stringify(this.user = user));
    }

    getUser(): User {
        return this.user;
    }

    has(): boolean {
        return !!this.user;
    }
}
