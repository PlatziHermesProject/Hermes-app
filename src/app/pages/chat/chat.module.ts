import { ChatComponent } from './components/chat/chat.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';

import { PeopleComponent } from './components/people/people.component';

@NgModule({
  declarations: [ChatComponent, PeopleComponent],
  imports: [CommonModule, ChatRoutingModule],
})
export class ChatModule {}
