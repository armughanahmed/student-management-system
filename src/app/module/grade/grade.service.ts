import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GradeViewModel } from './models/grade-view-model';

@Injectable({
  providedIn: 'root',
})
export class GradeService {
  private gradeURI = `${environment.baseURI}`;
  constructor(private _http: HttpClient) {}

  getGrades() {
    return this._http.get<GradeViewModel[]>(`${this.gradeURI}/GradeApi/1,1`);
  }
}
