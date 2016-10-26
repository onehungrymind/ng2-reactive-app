import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Item } from '../../shared';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsListComponent {
  @Input() items: Item[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
