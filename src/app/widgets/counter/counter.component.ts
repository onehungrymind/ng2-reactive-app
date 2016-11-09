import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
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

  coolness: number = 5;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
  }

  getNativeElement(element) {
    return element.nativeElement;
  }
}
