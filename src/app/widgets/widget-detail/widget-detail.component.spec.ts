/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { WidgetDetailComponent } from './widget-detail.component';
import { UsersService } from '../../shared';

class UsersServiceStub {}

describe('Component: WidgetDetail', () => {
  let fixture: ComponentFixture<WidgetDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetDetailComponent ],
      providers: [{ provide: UsersService, useClass: UsersServiceStub }]
    });

    TestBed.overrideComponent(WidgetDetailComponent, {set: {template: ''}});

    fixture = TestBed.createComponent(WidgetDetailComponent);
  });

  it('should create an instance', () => {
    expect(fixture).toBeTruthy();
  });
});
