import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriteRoutingModule } from './write-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { WriteComponent } from './components/write/write.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CoreModule } from '../../core/core.module';


@NgModule({
  declarations: [WriteComponent],
  imports: [
    CommonModule,
    WriteRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule
  ],
})
export class WriteModule {}
