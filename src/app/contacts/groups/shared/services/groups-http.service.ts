import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Group} from '../../../../core/models/group.model.interface';

@Injectable({
    providedIn: 'root'
})
export class GroupsHttpService {

    constructor(private http: HttpClient) {
    }

    new(form: FormGroup): Observable<Group> {
        return this.http.post<Group>(environment.groups.new, {
            name: form.get('name').value
        });
    }
}
