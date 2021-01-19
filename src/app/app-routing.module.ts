import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {UserGuard} from './core/guards/user.guard';
import {ContactsGuard} from './core/guards/contact.guard';

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./authorizations/authorizations.module').then(m => m.AuthorizationsModule),
        canActivate: [
            // UserGuard
        ]
    },
    {
        path: 'contacts',
        loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule),
        canActivate: [
          //   ContactsGuard
        ]
    },
    {
        path: '**',
        redirectTo: 'auth'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
