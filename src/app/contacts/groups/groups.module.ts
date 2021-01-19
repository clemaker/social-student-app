import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import { GroupDiscussionComponent } from './group-discussion/group-discussion.component';
import { GroupCreatorComponent } from './group-creator/group-creator.component';
import { GroupsComponent } from './groups.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    GroupsComponent,
    GroupDiscussionComponent,
    GroupCreatorComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    GroupsRoutingModule
  ]
})
export class GroupsModule { }
