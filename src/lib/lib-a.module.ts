import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentAModule } from '@test/lib-a/components/src/lib/component-a';

@NgModule({
  imports: [CommonModule, ComponentAModule],
})
export class LibAModule {}
