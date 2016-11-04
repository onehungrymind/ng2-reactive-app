import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UsersService, User } from '../shared';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;
  selectedUser: User;

  constructor(
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.users$ = this.usersService.users$;
    this.usersService.loadUsers();
  }

  resetUser() {
    let emptyUser: User = {id: null, name: '', bio: ''};
    this.selectedUser = emptyUser;
  }

  selectUser(user: User) {
    this.selectedUser = user;
  }

  saveUser(user: User) {
    this.usersService.saveUser(user);

    // Generally, we would want to wait for the result of `usersService.saveUser`
    // before resetting the current user.
    this.resetUser();
  }

  deleteUser(user: User) {
    this.usersService.deleteUser(user);

    // Generally, we would want to wait for the result of `usersService.deleteUser`
    // before resetting the current user.
    this.resetUser();
  }
}

