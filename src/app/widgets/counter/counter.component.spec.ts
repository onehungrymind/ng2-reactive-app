/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ChangeDetectorRef } from '@angular/core';
import { CounterComponent } from './counter.component';

class ChangeDetectorRefStub {}

describe('Component: Counter', () => {
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ],
      providers: [{ provide: ChangeDetectorRef, useClass: ChangeDetectorRefStub }]
    });

    TestBed.overrideComponent(CounterComponent, {set: {template: ''}});

    fixture = TestBed.createComponent(CounterComponent);
  });

  it('should create an instance', () => {
    expect(fixture).toBeTruthy();
  });
});
