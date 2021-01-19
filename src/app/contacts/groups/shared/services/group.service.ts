import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private formBuilder: FormBuilder) { }

  build(): FormGroup {
    return this.formBuilder.group({
          name: ['', Validators.required]
        },
    );
  }
}
