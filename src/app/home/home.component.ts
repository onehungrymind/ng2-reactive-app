import { Component, ViewEncapsulation } from '@angular/core';
import { ItemsService, WidgetsService, Item, Widget } from '../shared';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  items: Item[];
  widgets: Widget[];

  constructor(
    private itemsService: ItemsService,
    private widgetsService: WidgetsService
  ) {
    this.itemsService.items$
      .subscribe(items => this.items = items);
    this.widgetsService.widgets$
      .subscribe(widgets => this.widgets = widgets);

    this.itemsService.loadItems();
  }
}
