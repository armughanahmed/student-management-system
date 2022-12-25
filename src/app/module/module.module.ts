import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleRoutingModule } from './module-routing.module';
import { ModuleComponent } from './module.component';
import { AuthModule } from './auth/auth.module';
import { AttendanceModule } from './attendance/attendance.module';

@NgModule({
  declarations: [ModuleComponent],
  imports: [CommonModule, ModuleRoutingModule, AttendanceModule],
})
export class ModuleModule {}
