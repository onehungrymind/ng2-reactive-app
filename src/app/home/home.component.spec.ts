/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { ItemsService, WidgetsService } from '../shared';

class ItemsServiceStub {
  loadItems() {}
}
class WidgetsServiceStub {
  loadWidgets() {}
}

describe('Component: Home', () => {
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [
        { provide: ItemsService, useClass: ItemsServiceStub },
        { provide: WidgetsService, useClass: WidgetsServiceStub }
      ]
    });

    TestBed.overrideComponent(HomeComponent, {set: {template: ''}});

    fixture = TestBed.createComponent(HomeComponent);
  });

  it('should create an instance', () => {
    expect(fixture).toBeTruthy();
  });
});
