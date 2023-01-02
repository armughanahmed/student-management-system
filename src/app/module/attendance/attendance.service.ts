import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AttendanceViewModel } from './models/attendance-view.model';

@Injectable({
  providedIn: 'root',
})
export class AttendanceService {
  private attendanceURI = `${environment.baseURI}/AttendanceApi/1,1`;
  constructor(private _http: HttpClient) {}

  getAttendance() {
    return this._http.get<AttendanceViewModel[]>(this.attendanceURI);
  }
}
