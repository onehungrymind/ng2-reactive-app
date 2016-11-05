import { Component, ViewChild, ChangeDetectorRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/scan';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @ViewChild('increment') increment;
  @ViewChild('decrement') decrement;

  coolness: number;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    const decrement$ = Observable.fromEvent(this.getNativeElement(this.decrement), 'click')
      .map(event => -1);

    const increment$ = Observable.fromEvent(this.getNativeElement(this.increment), 'click')
      .map(event => 1);

    Observable.merge(decrement$, increment$)
      .startWith(5)
      .scan((acc, curr) => acc + curr >= 0 ? acc + curr : acc)
      .subscribe(coolness => {
        this.coolness = coolness;
        this.cd.detectChanges();
      });

  }

  getNativeElement(element) {
    return element.nativeElement;
  }
}
