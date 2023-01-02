import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { AttendanceViewModel } from '../models/attendance-view.model';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-attendance-view',
  templateUrl: './attendance-view.component.html',
  styleUrls: ['./attendance-view.component.scss'],
})
export class AttendanceViewComponent implements OnInit {
  attendance: AttendanceViewModel[] = [];

  clearTable(table: Table) {
    table.clear();
  }

  constructor(private _attendanceService: AttendanceService) {}

  ngOnInit(): void {
    this._attendanceService
      .getAttendance()
      .subscribe((x) => (this.attendance = x));
  }
}
