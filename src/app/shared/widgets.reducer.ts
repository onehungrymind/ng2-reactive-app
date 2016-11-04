import { Widget } from './widget.model';

import { ActionReducer, Action } from '@ngrx/store';

export const ADD_WIDGETS = 'ADD_WIDGETS';
export const CREATE_WIDGET = 'CREATE_WIDGET';
export const UPDATE_WIDGET = 'UPDATE_WIDGET';
export const DELETE_WIDGET = 'DELETE_WIDGET';

const comparator = 'id';

export const widgets: ActionReducer<Widget[]> = (state: Widget[] = [], action: Action) => {
  switch (action.type) {
    case ADD_WIDGETS:
      return action.payload;

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
