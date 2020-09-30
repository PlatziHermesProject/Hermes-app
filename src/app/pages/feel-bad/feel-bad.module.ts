import { FeelBadComponent } from './components/feel-bad/feel-bad.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeelBadRoutingModule } from './feel-bad-routing.module';

@NgModule({
  declarations: [FeelBadComponent],
  imports: [CommonModule, FeelBadRoutingModule],
})
export class FeelBadModule {}
