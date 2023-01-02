import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GradeRoutingModule } from './grade-routing.module';
import { GradeViewComponent } from './grade-view/grade-view.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [GradeViewComponent],
  imports: [CommonModule, TableModule, GradeRoutingModule],
})
export class GradeModule {}
