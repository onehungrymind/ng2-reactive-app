import { Widget } from './widget.model';

import { ActionReducer, Action } from '@ngrx/store';

export const ADD_WIDGETS = 'ADD_WIDGETS';

const initialState = [
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

export const widgets: ActionReducer<Widget[]> = (state: Widget[] = initialState, action: Action) => {
  switch (action.type) {
    case ADD_WIDGETS:
      return state;

    default:
      return state;
  }
};
