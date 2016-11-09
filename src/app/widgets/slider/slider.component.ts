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

  constructor(private builder: FormBuilder) {}

  ngOnInit() {
    // HINT: All class members and imported values/operators will be used

    this.myForm = this.builder.group({
      min: this.startMin,
      max: this.startMax
    });

    // Create a stream of form value changes //

    // ===================================== //

    // Create two sub-streams that pull the //
    // appropriate values from the form //

    // ==================================== //
  }
}
