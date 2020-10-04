import { SharedModule } from './../../shared/shared.module';
import { RegisterComponent } from './components/register/register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { RegisterRoutingModule } from './register-routing.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    SharedModule,
    CoreModule
  ],
})
export class RegisterModule {}
