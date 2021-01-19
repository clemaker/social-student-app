import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {GroupService} from '../shared/services/group.service';
import {GroupsHttpService} from '../shared/services/groups-http.service';

@Component({
  selector: 'app-group-creator',
  templateUrl: './group-creator.component.html',
  styleUrls: ['./group-creator.component.scss'],
})
export class GroupCreatorComponent implements OnInit, OnDestroy {

  public validationsForm: FormGroup;
  public error: HttpErrorResponse;

  constructor(
      private groupService: GroupService,
      private groupHttpService: GroupsHttpService,
      private routerService: Router
  ) {
  }

  ngOnInit() {
    this.validationsForm = this.groupService.build();
  }

  ngOnDestroy() {
    this.ionViewDidLeave();
  }

  ionViewDidLeave() {
    this.validationsForm = this.groupService.build();
  }

  create() {
    this.groupHttpService.new(this.validationsForm).subscribe(
        () => {
          this.routerService.navigate(['/contacts', 'dashboard']);
        },
        (error: HttpErrorResponse) => {
          this.error = error;
        }
    );
  }

}
