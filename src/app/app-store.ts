import { Item, User, Widget } from './shared';

export interface AppStore {
  items: Item[],
  users: User[],
  widgets: Widget[]
}
