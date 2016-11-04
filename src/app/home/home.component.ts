import { Component, OnInit } from '@angular/core';
import { UsersService, ItemsService, WidgetsService, Item, User, Widget } from '../shared';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

// TODO: is this still using inheritance?
interface UserData {
  name: string,
  items: Item[],
  widgets: Widget[]
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items$: Observable<Item[]> = this.itemsService.items$;
  users$: Observable<User[]> = this.usersService.users$;
  widgets$: Observable<Widget[]> = this.widgetsService.widgets$;
  usersData$: Observable<UserData[]>;

  constructor(
    private usersService: UsersService,
    private itemsService: ItemsService,
    private widgetsService: WidgetsService
  ) {
  }

  ngOnInit() {
    this.usersService.loadUsers();
    this.itemsService.loadItems();
    this.widgetsService.loadWidgets();

    this.usersData$ = Observable.combineLatest(this.users$, this.items$, this.widgets$, (users, items, widgets) => {
      return users.map(user => {
        return Object.assign({}, {
          name: user.name,
          items: items.filter(item => item.user === user.id),
          widgets: widgets.filter(widget => widget.user === user.id)
        });
      });
    });
  }

}
