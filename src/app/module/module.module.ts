import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleRoutingModule } from './module-routing.module';
import { ModuleComponent } from './module.component';
import { AuthModule } from './auth/auth.module';
import { AttendanceModule } from './attendance/attendance.module';
import { GradeModule } from './grade/grade.module';

@NgModule({
  declarations: [ModuleComponent],
  imports: [CommonModule, ModuleRoutingModule, AttendanceModule, GradeModule],
})
export class ModuleModule {}
