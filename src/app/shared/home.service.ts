import { Injectable } from '@angular/core';
import { ItemsService } from './items.service';
import { WidgetsService } from './widgets.service';
import { UsersService } from './users.service';
import { Item } from './item.model';
import { Widget } from './widget.model';
import { User } from './user.model';
import { Observable } from 'rxjs/Observable';

export interface UserData {
  name: string;
  items: Item[];
  widgets: Widget[];
}

@Injectable()
export class HomeService {
  items$: Observable<Item[]> = this.itemsService.items$;
  users$: Observable<User[]> = this.usersService.users$;
  widgets$: Observable<Widget[]> = this.widgetsService.widgets$;
  data$: Observable<UserData[]> = Observable.combineLatest(
    this.users$, this.items$, this.widgets$,
    (users,      items,       widgets) => {
      return users.map(user => {
        return Object.assign({}, {
          name: user.name,
          items: items.filter(item => item.user === user.id),
          widgets: widgets.filter(widget => widget.user === user.id)
        });
      });
  });

  constructor(
    private usersService: UsersService,
    private itemsService: ItemsService,
    private widgetsService: WidgetsService
  ) {
    this.usersService.loadUsers();
    this.itemsService.loadItems();
    this.widgetsService.loadWidgets();
  }

}
