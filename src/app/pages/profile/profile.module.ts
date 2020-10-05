import { ProfileComponent } from './components/profile/profile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { MyLettersComponent } from './components/my-letters/my-letters.component';
import { ResponsesComponent } from './components/responses/responses.component';

@NgModule({
  declarations: [ProfileComponent, UserInfoComponent, MyLettersComponent, ResponsesComponent],
  imports: [CommonModule, ProfileRoutingModule, SharedModule],
})
export class ProfileModule {}
