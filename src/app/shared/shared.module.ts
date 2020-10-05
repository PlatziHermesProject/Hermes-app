import { SidenavComponent } from './components/sidenav/sidenav.component';

import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetterComponent } from './components/letter/letter.component';
import { ReplyComponent } from './components/reply/reply.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, LetterComponent, SidenavComponent, ReplyComponent],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [
    HeaderComponent,
    LetterComponent,
    SidenavComponent,
    ReplyComponent,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
