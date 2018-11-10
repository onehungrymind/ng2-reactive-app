import { Widget } from './widget.model';

import { ActionReducer, Action } from '@ngrx/store';

export const ADD_WIDGETS = 'ADD_WIDGETS';
export const CREATE_WIDGET = 'CREATE_WIDGET';
export const UPDATE_WIDGET = 'UPDATE_WIDGET';
export const DELETE_WIDGET = 'DELETE_WIDGET';

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

const comparator = 'id';

export function widgets(state: Widget[] = [], action: Action) {
  switch (action.type) {
    case ADD_WIDGETS:
      return initialState;

    case CREATE_WIDGET:
      return [...state, action.payload];

    case UPDATE_WIDGET:
      return state.map(widget => {
        return widget[comparator] === action.payload[comparator] ? Object.assign({}, widget, action.payload) : widget;
      });

    case DELETE_WIDGET:
      return state.filter(widget => {
        return widget[comparator] !== action.payload[comparator];
      });

    default:
      return state;
  }
};
