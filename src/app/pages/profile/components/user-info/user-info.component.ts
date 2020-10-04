import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../../core/services/user/user.service';
import { ProfileService } from './../../../../core/services/profile/profile.service';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  userName: string;
  userEmail: string;
  constructor(
    private profileservice: ProfileService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): any{
    const user = this.userService.getValueTokenKey("user_id");
    this.profileservice.getUserVars(user)
      .valueChanges
      .subscribe((result: any) => {
        this.userName = result.data && result.data.getUserInfo.name;
        this.userEmail = result.data && result.data.getUserInfo.email;
      })
  }

}
