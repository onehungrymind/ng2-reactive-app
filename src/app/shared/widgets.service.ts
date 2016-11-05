import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Widget } from './widget.model';

const widgets = [
  {
    'id': 1,
    'name': 'Widget 1',
    'description': 'This is a description',
    'user': 1
  },
  {
    'id': 2,
    'name': 'Widget 2',
    'description': 'This is a description',
    'user': 3
  },
  {
    'id': 3,
    'name': 'Widget 3',
    'description': 'This is a lovely widget edited again!',
    'user': 2
  }
];

@Injectable()
export class WidgetsService {
  widgets$: Observable<Widget[]> = Observable.of(widgets);

  constructor() {}
}
