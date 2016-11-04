/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ItemsComponent } from './items.component';
import { ItemsService } from '../shared';

class ItemsServiceStub {}

describe('Component: Items', () => {
  let fixture: ComponentFixture<ItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsComponent ],
      providers: [{ provide: ItemsService, useClass: ItemsServiceStub }]
    });

    TestBed.overrideComponent(ItemsComponent, {set: {template: ''}});

    fixture = TestBed.createComponent(ItemsComponent);
  });

  it('should create an instance', () => {
    expect(fixture).toBeTruthy();
  });
});
