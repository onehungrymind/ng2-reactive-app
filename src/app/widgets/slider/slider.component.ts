import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  myForm: FormGroup;
  minValue: Observable<number>;
  maxValue: Observable<number>;
  min = 0;
  max = 100;
  startMin = 45;
  startMax = 55;
  step = 1;

  constructor (private builder: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.builder.group({
      min: this.startMin,
      max: this.startMax
    });

    let valueStream = this.myForm.valueChanges
      .map(val => {
        return {
          min: parseFloat(val.min),
          max: parseFloat(val.max)
        };
      })
      .pairwise()
      .filter(([oldVal, newVal]) => {
        let isValid = true;
        if (oldVal.min !== newVal.min && newVal.min > newVal.max) {
          isValid = false;
          (<FormControl>this.myForm.controls['max']).setValue(newVal.min);
        }
        else if (oldVal.max !== newVal.max && newVal.max < newVal.min) {
          isValid = false;
          (<FormControl>this.myForm.controls['min']).setValue(newVal.max);
        }
        return isValid;
      })
      .map(([oldVal, newVal]) => newVal);

    this.minValue = valueStream
      .map(vals => vals.min)
      .startWith(this.startMin);

    this.maxValue = valueStream
      .map(vals => vals.max)
      .startWith(this.startMax);
  }
}
