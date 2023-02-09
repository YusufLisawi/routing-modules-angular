import { Component } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent {
  stats: any[] = [
    { value: 22, label: '# of Users' },
    { value: 9000, label: 'Revenue' },
    { value: 50, label: 'Reviews' },
  ];

  items: any[] = [
    {
      image:
        'https://images.unsplash.com/photo-1675773681567-2783a1f8bc89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80',
      title: 'Test Test',
      desc: 'Test TestTest Test',
    },
    {
      image:
        'https://images.unsplash.com/photo-1675892643912-e3a410076610?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=60',
      title: 'Test Test',
      desc: 'Test TestTest Test',
    },
    {
      image:
        'https://images.unsplash.com/photo-1675868374160-42bac12cbcdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80',
      title: 'Test Test',
      desc: 'Test TestTest TestTest Test',
    },
  ];
}
