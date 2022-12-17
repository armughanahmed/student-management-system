import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleRoutingModule } from './module-routing.module';
import { ModuleComponent } from './module.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [ModuleComponent],
  imports: [CommonModule, ModuleRoutingModule],
})
export class ModuleModule {}
