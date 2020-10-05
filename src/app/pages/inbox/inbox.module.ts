import { InboxComponent } from './components/inbox/inbox.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InboxComponent],
  imports: [CommonModule, InboxRoutingModule, FormsModule],
})
export class InboxModule {}
