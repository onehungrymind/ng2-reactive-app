/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { SliderComponent } from './slider.component';
import { FormBuilder } from '@angular/forms';

class FormBuilderStub {}

describe('Component: Slider', () => {
  let fixture: ComponentFixture<SliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderComponent ],
      providers: [{ provide: FormBuilder, useClass: FormBuilderStub }]
    });

    TestBed.overrideComponent(SliderComponent, {set: {template: ''}});

    fixture = TestBed.createComponent(SliderComponent);
  });

  it('should create an instance', () => {
    expect(fixture).toBeTruthy();
  });
});
