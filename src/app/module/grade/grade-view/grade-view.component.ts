import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { GradeService } from '../grade.service';
import { GradeViewModel } from '../models/grade-view-model';

@Component({
  selector: 'app-grade-view',
  templateUrl: './grade-view.component.html',
  styleUrls: ['./grade-view.component.scss'],
})
export class GradeViewComponent implements OnInit {
  grade: GradeViewModel[] = [];

  clearTable(table: Table) {
    table.clear();
  }

  constructor(private _gradeService: GradeService) {}

  ngOnInit(): void {
    this._gradeService.getGrades().subscribe((x) => (this.grade = x));
  }
}
