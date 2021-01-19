import { Component, OnInit } from '@angular/core';
import {ContactService} from '../shared/services/contact.service';
import {User} from '../../core/models/user.model.interface';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-contact-dashboard',
  templateUrl: './contact-dashboard.component.html',
  styleUrls: ['./contact-dashboard.component.scss'],
})
export class ContactDashboardComponent implements OnInit {

  public users: User[];
  public user: User;
  public error: HttpErrorResponse;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.index().subscribe(
        (res: User[]) => {
          this.users = res;
        },
        (error: HttpErrorResponse) => {
          this.error = error;
        }
    );
  }

  invite(user: User): void {
    this.contactService.invite(user.id).subscribe(
        (res: User) => {
          this.user = res;
        },
        (error: HttpErrorResponse) => {
          this.error = error;
        }
    );
  }

  remove(user: User): void {
    this.contactService.delete(user.id).subscribe(
        (res: User) => {
          this.user = res;
        },
        (error: HttpErrorResponse) => {
          this.error = error;
        }
    );
  }
}
