import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Widget } from './widget.model';
import { AppStore } from '../app-store';
import {
  ADD_WIDGETS
} from './widgets.reducer';

@Injectable()
export class WidgetsService {
  widgets$: Observable<Widget[]> = this.store.select('widgets');

  constructor(
    private store: Store<AppStore>
  ) {}
  loadWidgets() {
    return this.store.dispatch({ type: ADD_WIDGETS });
  }
}
