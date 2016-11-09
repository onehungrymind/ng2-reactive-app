import {
  ADD_ITEMS,
  CREATE_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM
} from './items.reducer';
import {Injectable} from "@angular/core";

@Injectable()
export class ItemsActions {
  updateItem(item){
    return { type: UPDATE_ITEM, payload: item };
  }

  createItem(item){
    return {type: CREATE_ITEM, payload: item}
  }
}
