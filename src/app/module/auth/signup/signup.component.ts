import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SignupService } from './signup.service';
import { StudentModel } from '../models/student.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  students: StudentModel[] = [];

  constructor(
    private _fb: FormBuilder,
    private _signupService: SignupService
  ) {}

  ngOnInit(): void {
    this.initalizeForm();
  }

  private initalizeForm() {
    this.signupForm = this._fb.group({
      email: '',
      password: '',
    });
  }

  private formClear() {
    this.signupForm.patchValue({
      email: '',
      password: '',
    });
  }

  onSignupFormSubmit() {
    console.log(this.signupForm.value);
    this._signupService.getStudents().subscribe((res) => {
      if (res && res.length) {
        this.students = res;
      }
      console.log(this.students);
    });
    this.formClear();
  }
}
