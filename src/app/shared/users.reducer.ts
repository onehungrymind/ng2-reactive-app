import { User } from './user.model';

import { ActionReducer, Action } from '@ngrx/store';

export const ADD_USERS = 'ADD_USERS';
export const CREATE_USER = 'CREATE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';

const comparator = 'id';

export const users: ActionReducer<User[]> = (state: User[] = [], action: Action) => {
  switch (action.type) {
    case ADD_USERS:
      return action.payload;

    case CREATE_USER:
      return [...state, action.payload];

    case UPDATE_USER:
      return state.map(user => {
        return user[comparator] === action.payload[comparator] ? Object.assign({}, user, action.payload) : user;
      });

    case DELETE_USER:
      return state.filter(user => {
        return user[comparator] !== action.payload[comparator];
      });

    default:
      return state;
  }
};
