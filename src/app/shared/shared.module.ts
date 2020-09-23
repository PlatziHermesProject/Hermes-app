import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetterComponent } from './components/letter/letter.component';

@NgModule({
  declarations: [HeaderComponent, LetterComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, LetterComponent],
})
export class SharedModule {}
