import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Item } from './item.model';
import { AppStore } from '../app-store';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {
  ADD_ITEMS,
  CREATE_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM
} from './items.reducer';
import {ItemsActions} from "./items.actions";

const BASE_URL = 'http://localhost:3000/items/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class ItemsService {
  items$: Observable<Item[]> = this.store.select('items');

  constructor(
    private http: Http,
    private store: Store<AppStore>,
    private actions: ItemsActions
  ) {}

  loadItems() {
    return this.http.get(BASE_URL)
      .map(res => res.json())
      .subscribe(payload => this.store.dispatch({ type: ADD_ITEMS, payload }));
  }

  saveItem(item: Item): Observable<any> {
    return (item.id) ? this.updateItem(item) : this.createItem(item);
  }

  createItem(item: Item) {
    return this.http.post(`${BASE_URL}`, JSON.stringify(item), HEADER)
      .map(res => res.json())
      .do(action => this.store.dispatch(this.actions.createItem(item)));
  }

  updateItem(item: Item) {
    return this.http.put(`${BASE_URL}${item.id}`, JSON.stringify(item), HEADER)
      .map(res => res.status)
      .do(action => this.store.dispatch(this.actions.updateItem(item)));
  }

  deleteItem(item: Item) {
    return this.http.delete(`${BASE_URL}${item.id}`)
      .do(action => this.store.dispatch({ type: DELETE_ITEM, payload: item }));
  }
}
