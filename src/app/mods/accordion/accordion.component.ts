import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  @Input() data: any[] = [];
  openedItemIndex = 0;

  onClick(index: number) {
    if (index === this.openedItemIndex)
      this.openedItemIndex = -1;
    else
      this.openedItemIndex = index;
  }
}
