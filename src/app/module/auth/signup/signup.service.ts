import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StudentModel } from '../models/student.model';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private studentAPI = `${environment.baseURI}/StudentApi`;
  constructor(private _http: HttpClient) {}

  getStudents() {
    return this._http.get<StudentModel[]>(this.studentAPI);
  }
}
