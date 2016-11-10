import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WidgetsService, Widget } from '../shared';
import {AppStore} from "../app-store";
import {Store} from "@ngrx/store";
import {DELETE_WIDGET} from "../shared/widgets.reducer";

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetsComponent implements OnInit {
  widgets$: Observable<Widget[]>;
  selectedWidget: Widget;

  constructor(
    private widgetsService: WidgetsService,
    private store: Store<AppStore>
  ) {

  }

  ngOnInit() {
    this.widgets$ = this.store.select('widgets');
    this.widgetsService.loadWidgets();
  }

  resetWidget() {
    let emptyWidget: Widget = {id: null, name: '', description: '', user: undefined};
    this.selectedWidget = emptyWidget;
  }

  selectWidget(widget: Widget) {
    this.selectedWidget = widget;
  }

  saveWidget(widget: Widget) {
    this.widgetsService.saveWidget(widget);

    // Generally, we would want to wait for the result of `widgetsService.saveWidget`
    // before resetting the current widget.
    this.resetWidget();
  }

  deleteWidget(widget: Widget) {
    this.store.dispatch({type: DELETE_WIDGET, payload: widget});
  }
}

