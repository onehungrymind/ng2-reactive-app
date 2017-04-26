/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { SliderComponent } from './slider.component';
import { FormBuilder } from '@angular/forms';

describe('Component: Slider', () => {
  it('should create an instance', () => {
    let component = new SliderComponent(new FormBuilder());
    expect(component).toBeTruthy();
  });
});
