import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactDashboardComponent } from './contact-dashboard/contact-dashboard.component';
import { ContactsComponent } from './contacts.component';
import { ContactSearchComponent } from './contact-search/contact-search.component';
import { ContactDiscussionComponent } from './contact-discussion/contact-discussion.component';
import { SharedModule } from '../shared/shared.module';
import {ToolbarComponent} from '../authorizations/shared/components/toolbar/toolbar.component';


@NgModule({
  declarations: [
    ContactsComponent,
    ContactDashboardComponent,
    ContactSearchComponent,
    ContactDiscussionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
