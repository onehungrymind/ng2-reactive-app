import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { User } from './user.model';
import { AppStore } from '../app-store';
import 'rxjs/add/operator/map';
import {
  ADD_USERS,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER
} from './users.reducer';

const BASE_URL = 'http://localhost:3000/users/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class UsersService {
  users$: Observable<User[]> = this.store.select('users');

  constructor(
    private http: Http,
    private store: Store<AppStore>
  ) {}

  loadUsers() {
    return this.http.get(BASE_URL)
      .map(res => res.json())
      .map(payload => ({ type: ADD_USERS, payload }))
      .subscribe(action => this.store.dispatch(action));
  }

  saveUser(user: User) {
    return (user.id) ? this.updateUser(user) : this.createUser(user);
  }

  createUser(user: User) {
    return this.http.post(`${BASE_URL}`, JSON.stringify(user), HEADER)
      .map(res => res.json())
      .map(payload => ({ type: CREATE_USER, payload }))
      .subscribe(action => this.store.dispatch(action));
  }

  updateUser(user: User) {
    return this.http.put(`${BASE_URL}${user.id}`, JSON.stringify(user), HEADER)
      .subscribe(action => this.store.dispatch({ type: UPDATE_USER, payload: user }));
  }

  deleteUser(user: User) {
    return this.http.delete(`${BASE_URL}${user.id}`)
      .subscribe(action => this.store.dispatch({ type: DELETE_USER, payload: user }));
  }
}
