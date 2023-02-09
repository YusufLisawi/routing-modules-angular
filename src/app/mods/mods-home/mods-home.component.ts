import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent {
  modalOpen = false;
  items = [
    {title : 'Angular test', content: 'lorem lorem lorem'},
    {title : 'Angular test', content: 'lorem lorem lorem'},
    {title : 'Angular test', content: 'lorem lorem lorem'},
  ]
  toggleModel() {
    this.modalOpen = !this.modalOpen
  }

}
