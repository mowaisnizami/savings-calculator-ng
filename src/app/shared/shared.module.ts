import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimengModule } from './modules/primeng/primeng.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, PrimengModule],
  exports: [PrimengModule],
})
export class SharedModule {}
