import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ItemsService, Item } from '../shared';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsComponent implements OnInit {
  items$: Observable<Item[]>;
  selectedItem: Item;

  constructor(
    private itemsService: ItemsService
  ) {}

  ngOnInit() {
    this.items$ = this.itemsService.items$;
    this.itemsService.loadItems();
  }

  resetItem() {
    let emptyItem: Item = {id: null, name: '', description: '', user: undefined};
    this.selectedItem = emptyItem;
  }

  selectItem(item: Item) {
    this.selectedItem = item;
  }

  saveItem(item: Item) {
    this.itemsService.saveItem(item)
      .subscribe(
        (res) => {
          console.log("Save Item success", JSON.stringify(res, null, 2));
          this.resetItem();
        },
        (err) => alert("error")
      );
  }

  deleteItem(item: Item) {
    this.itemsService.deleteItem(item);

    // Generally, we would want to wait for the result of `itemsService.deleteItem`
    // before resetting the current item.
    this.resetItem();
  }
}

