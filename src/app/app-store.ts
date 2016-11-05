import { Item, User } from './shared';

export interface AppStore {
  items: Item[];
  users: User[];
}
