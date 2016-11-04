import { Component, OnInit } from '@angular/core';
import { UsersService, ItemsService, Item, User } from '../shared';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

// TODO: is this still using inheritance?
interface UserItem {
  name: string,
  items: Item[]
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items$: Observable<Item[]> = this.itemsService.items$;
  users$: Observable<User[]> = this.usersService.users$;
  usersItems$: Observable<UserItem[]>;

  constructor(private usersService: UsersService,
              private itemsService: ItemsService) {
  }

  ngOnInit() {
    this.usersService.loadUsers();
    this.itemsService.loadItems();

    this.usersItems$ = Observable.combineLatest(this.users$, this.items$, (users, items) => {
      return users.map(user => {
        return Object.assign({}, {
          name: user.name,
          items: items.filter(item => item.user === user.id)
        });
      });
    });
  }

}
