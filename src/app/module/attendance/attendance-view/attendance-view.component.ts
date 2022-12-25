import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance-view',
  templateUrl: './attendance-view.component.html',
  styleUrls: ['./attendance-view.component.scss'],
})
export class AttendanceViewComponent implements OnInit {
  products: any[] = [
    {
      code: 'mbvjkgip5',
      name: 'Bamboo Watch',
      category: 'Accessories',
      quantity: 24,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
