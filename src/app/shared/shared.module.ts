import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    exports: [
        IonicModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ]
})
export class SharedModule {
}
