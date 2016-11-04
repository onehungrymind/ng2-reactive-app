import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Widget } from './widget.model';
import { AppStore } from '../app-store';
import {
  ADD_WIDGETS,
  CREATE_WIDGET,
  UPDATE_WIDGET,
  DELETE_WIDGET
} from './widgets.reducer';
import { UUID } from 'angular2-uuid';

@Injectable()
export class WidgetsService {
  widgets$: Observable<Widget[]> = this.store.select('widgets');

  constructor(
    private store: Store<AppStore>
  ) {}

  loadWidgets() {
    return this.store.dispatch({ type: ADD_WIDGETS });
  }

  saveWidget(widget: Widget) {
    return (widget.id) ? this.updateWidget(widget) : this.createWidget(widget);
  }

  createWidget(widget: Widget) {
    // temporary – will be handled by the server
    widget.id = +UUID.UUID();

    return this.store.dispatch({ type: CREATE_WIDGET, payload: widget });
  }

  updateWidget(widget: Widget) {
    return this.store.dispatch({ type: UPDATE_WIDGET, payload: widget });
  }

  deleteWidget(widget: Widget) {
    return this.store.dispatch({ type: DELETE_WIDGET, payload: widget });
  }
}
