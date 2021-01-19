import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactDashboardComponent } from './contact-dashboard/contact-dashboard.component';
import { ContactDiscussionComponent } from './contact-discussion/contact-discussion.component';
import { ContactSearchComponent } from './contact-search/contact-search.component';
import { ContactsComponent } from './contacts.component';

const routes: Routes = [
  {
    path: '',
    component: ContactsComponent,
    children: [
      {
        path: 'dashboard',
        component: ContactDashboardComponent
      },
      {
        path: 'discussion/:id',
        component: ContactDiscussionComponent
      },
      {
        path: 'search',
        component: ContactSearchComponent
      },
      {
        path: 'groups',
      loadChildren: () => import('./groups/groups.module').then(m => m.GroupsModule)
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
