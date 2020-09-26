import { SidenavComponent } from './components/sidenav/sidenav.component';

import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetterComponent } from './components/letter/letter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, LetterComponent, SidenavComponent],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [
    HeaderComponent,
    LetterComponent,
    SidenavComponent,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
