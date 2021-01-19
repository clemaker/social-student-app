import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthorizationsRoutingModule} from './authorizations-routing.module';
import {AuthorizationsComponent} from './authorizations.component';
import {LoginComponent} from './login/login.component';
import {EntryComponent} from './entry/entry.component';
import {RegisterComponent} from './register/register.component';
import {SharedModule} from '../shared/shared.module';
import {ToolbarComponent} from './shared/components/toolbar/toolbar.component';
import {RepeatedPasswordValidator} from './shared/validators/repeated-password.validator';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthorizationsInterceptor } from './shared/interceptors/authorizations.interceptor';

@NgModule({
    declarations: [
        AuthorizationsComponent,
        LoginComponent,
        EntryComponent,
        RegisterComponent,
        ToolbarComponent,
        RepeatedPasswordValidator
    ],
    exports: [
        ToolbarComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        AuthorizationsRoutingModule,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthorizationsInterceptor, multi: true }
    ]
})
export class AuthorizationsModule {
}
