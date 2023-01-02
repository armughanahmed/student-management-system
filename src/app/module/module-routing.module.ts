import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleComponent } from './module.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'attendance',
    loadChildren: () =>
      import('./attendance/attendance.module').then((m) => m.AttendanceModule),
  },
  {
    path: 'grade',
    loadChildren: () =>
      import('./grade/grade.module').then((m) => m.GradeModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleRoutingModule {}
