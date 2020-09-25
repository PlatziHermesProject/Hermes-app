import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriteRoutingModule } from './write-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { WriteComponent } from './components/write/write.component';
import { InputComponent } from './components/input/input.component';
import { ActionsComponent } from './components/actions/actions.component';

@NgModule({
  declarations: [WriteComponent, InputComponent, ActionsComponent],
  imports: [CommonModule, WriteRoutingModule, SharedModule],
})
export class WriteModule {}
