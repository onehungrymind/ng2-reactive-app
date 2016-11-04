/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { WidgetsComponent } from './widgets.component';
import { WidgetsService } from '../shared';

class WidgetsServiceStub {}

describe('Component: Widgets', () => {
  let fixture: ComponentFixture<WidgetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetsComponent ],
      providers: [{ provide: WidgetsService, useClass: WidgetsServiceStub }]
    });

    TestBed.overrideComponent(WidgetsComponent, {set: {template: ''}});

    fixture = TestBed.createComponent(WidgetsComponent);
  });

  it('should create an instance', () => {
    expect(fixture).toBeTruthy();
  });
});
