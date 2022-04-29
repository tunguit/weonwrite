import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PodItem } from '../../../@core/data/pod-products';

@Component({
  selector: 'pod-item-card',
  styleUrls: ['./pod-item.component.scss'],
  templateUrl: './pod-item.component.html'
})
export class PodItemComponent implements OnChanges{
  @Input() item: PodItem;

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes)
  }
}
