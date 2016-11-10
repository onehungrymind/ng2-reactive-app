import {Component, OnInit, ChangeDetectionStrategy, OnDestroy} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ItemsService, Item } from '../shared';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsComponent implements OnInit, OnDestroy {

  items$: Observable<Item[]>;
  selectedItem: Item;
  subs = {};

  constructor(
    private itemsService: ItemsService
  ) {}

  ngOnInit() {
    this.items$ = this.itemsService.items$;
    this.itemsService.loadItems();
  }

  ngOnDestroy(): void {
    if(!this.subs){
      return;
    }
    Object.keys(this.subs).forEach((key)=>{
      this.subs[key].unsubscribe();
    })
  }

  resetItem() {
    let emptyItem: Item = {id: null, name: '', description: '', user: undefined};
    this.selectedItem = emptyItem;
  }

  selectItem(item: Item) {
    this.selectedItem = item;
  }

  saveItem(item: Item) {
    this.subs['saveItem'] = this.itemsService.saveItem(item)
      .subscribe(
        (res) => {
          console.log("Save Item success", JSON.stringify(res, null, 2));
          this.resetItem();
        },
        (err) => alert("error")
      );
  }

 deleteItem(item: Item) {
    this.subs['deleteItem'] = this.itemsService.deleteItem(item)
      .subscribe(
        (res) => {
          console.log("Delete Item success", JSON.stringify(res, null, 2))
          this.resetItem();
        },
        (err) => alert("error")
      );
  }
}

