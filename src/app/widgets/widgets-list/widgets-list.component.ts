import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Widget } from '../../shared';

@Component({
  selector: 'app-widgets-list',
  templateUrl: './widgets-list.component.html',
  styleUrls: ['./widgets-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetsListComponent {
  @Input() widgets: Widget[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
