import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Widget, UsersService, User } from '../../shared';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-widget-detail',
  templateUrl: './widget-detail.component.html',
  styleUrls: ['./widget-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetDetailComponent implements OnInit {
  originalName: string;
  selectedWidget: Widget;
  users$: Observable<User[]> = this.usersService.users$;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set widget(value: Widget){
    if (value) { this.originalName = value.name; }
    this.selectedWidget = Object.assign({}, value);
  }

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.loadUsers();
  }
}
