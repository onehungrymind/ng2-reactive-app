/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { ItemsService, WidgetsService, Widget, Item } from '../shared';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

class ItemsServiceStub {
  items$: Observable<Item[]> = Observable.of([]);

  loadItems() {}
}
class WidgetsServiceStub {
  widgets$: Observable<Widget[]> = Observable.of([]);

  loadWidgets() {}
}

describe('Component: Home', () => {
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        {provide: ItemsService, useClass: ItemsServiceStub},
        {provide: WidgetsService, useClass: WidgetsServiceStub}
      ]
    });

    TestBed.overrideComponent(HomeComponent, {set: {template: ''}});

    fixture = TestBed.createComponent(HomeComponent);
  });

  it('should create an instance', () => {
    expect(fixture).toBeTruthy();
  });
});
