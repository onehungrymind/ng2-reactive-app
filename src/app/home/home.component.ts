import { Component, ViewEncapsulation } from '@angular/core';
import { ItemsService, WidgetsService, Item, Widget } from '../shared';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  items$: Observable<Item[]> = this.itemsService.items$;
  widgets$: Observable<Widget[]> = this.widgetsService.widgets$;

  constructor(
    private itemsService: ItemsService,
    private widgetsService: WidgetsService
  ) {
    this.itemsService.loadItems();
    this.widgetsService.loadWidgets();
  }
}
