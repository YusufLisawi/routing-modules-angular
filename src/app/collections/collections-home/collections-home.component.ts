import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent {
  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];
  data = [
    { name: 'James', age: 24, job: 'Designer' },
    { name: 'James', age: 24, job: 'Designer' },
    { name: 'James', age: 24, job: 'Designer' },
  ];
}
