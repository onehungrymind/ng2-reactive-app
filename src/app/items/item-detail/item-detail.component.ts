import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { UsersService, Item, User } from '../../shared';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemDetailComponent implements OnInit {
  originalName: string;
  selectedItem: Item;
  users$: Observable<User[]> = this.usersService.users$;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set item(value: Item){
    if (value) { this.originalName = value.name; }
    this.selectedItem = Object.assign({}, value);
  }

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.loadUsers();
  }
}
