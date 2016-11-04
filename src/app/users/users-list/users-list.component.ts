import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../../shared';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
  @Input() users: User[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
