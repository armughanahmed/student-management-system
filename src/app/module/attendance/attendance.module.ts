import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttendanceViewComponent } from './attendance-view/attendance-view.component';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [
    AttendanceViewComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    AttendanceRoutingModule
  ]
})
export class AttendanceModule { }
