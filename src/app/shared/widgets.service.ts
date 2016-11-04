import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Widget } from './widget.model';
import { AppStore } from '../app-store';
import 'rxjs/add/operator/map';
import {
  ADD_WIDGETS,
  CREATE_WIDGET,
  UPDATE_WIDGET,
  DELETE_WIDGET
} from './widgets.reducer';

const BASE_URL = 'http://localhost:3000/widgets/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class WidgetsService {
  widgets$: Observable<Widget[]> = this.store.select('widgets');

  constructor(
    private http: Http,
    private store: Store<AppStore>
  ) {}

  loadWidgets() {
    return this.http.get(BASE_URL)
      .map(res => res.json())
      .map(payload => ({ type: ADD_WIDGETS, payload }))
      .subscribe(action => this.store.dispatch(action));
  }

  saveWidget(widget: Widget) {
    return (widget.id) ? this.updateWidget(widget) : this.createWidget(widget);
  }

  createWidget(widget: Widget) {
    return this.http.post(`${BASE_URL}`, JSON.stringify(widget), HEADER)
      .map(res => res.json())
      .map(payload => ({ type: CREATE_WIDGET, payload }))
      .subscribe(action => this.store.dispatch(action));
  }

  updateWidget(widget: Widget) {
    return this.http.put(`${BASE_URL}${widget.id}`, JSON.stringify(widget), HEADER)
      .subscribe(action => this.store.dispatch({ type: UPDATE_WIDGET, payload: widget }));
  }

  deleteWidget(widget: Widget) {
    return this.http.delete(`${BASE_URL}${widget.id}`)
      .subscribe(action => this.store.dispatch({ type: DELETE_WIDGET, payload: widget }));
  }
}
