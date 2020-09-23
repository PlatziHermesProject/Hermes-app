import { WriteComponent } from './components/write/write.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WriteRoutingModule } from './write-routing.module';

@NgModule({
  declarations: [WriteComponent],
  imports: [CommonModule, WriteRoutingModule],
})
export class WriteModule {}
