/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ItemDetailComponent } from './item-detail.component';
import { UsersService } from '../../shared';

class UsersServiceStub {}

describe('Component: ItemDetail', () => {
  let fixture: ComponentFixture<ItemDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDetailComponent ],
      providers: [{ provide: UsersService, useClass: UsersServiceStub }]
    });

    TestBed.overrideComponent(ItemDetailComponent, {set: {template: ''}});

    fixture = TestBed.createComponent(ItemDetailComponent);
  });

  it('should create an instance', () => {
    expect(fixture).toBeTruthy();
  });
});
