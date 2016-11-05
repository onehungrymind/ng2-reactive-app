/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { CounterComponent } from './counter.component';

describe('Component: Counter', () => {
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    });

    TestBed.overrideComponent(CounterComponent, {set: {template: ''}});

    fixture = TestBed.createComponent(CounterComponent);
  });

  it('should create an instance', () => {
    expect(fixture).toBeTruthy();
  });
});
