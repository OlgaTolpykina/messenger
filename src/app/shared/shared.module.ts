import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StatusDirective } from './directives/status.directive';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [StatusDirective, FilterPipe],
  imports: [CommonModule],
  exports: [StatusDirective, FilterPipe],
})
export class SharedModule {}
