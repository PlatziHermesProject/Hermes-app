import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../../core/services/user/user.service';
import { ProfileService } from './../../../../core/services/profile/profile.service';
import { InboxService } from '../../../../core/services/inbox/inbox.service';
import {Apollo} from 'apollo-angular';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  letters: Observable<any>;
	letter: any[] = [];
  userName: string;
  userEmail: string;
  replies: any[] = [];
  
  constructor(
    private profileService: ProfileService,
    private userService: UserService,
    private apollo: Apollo,
    private inbox: InboxService,
  ) { }

  ngOnInit(): void {
    this.getUsers();
    this.getData().subscribe((result) => {
			result.map((result) => {
				this.letter = [...this.letter, result];
			});
    });
    this.getReplies();
  }

  getUsers(): any{
    const user = this.userService.getValueTokenKey("user_id");
    this.profileService.getUserVars(user)
      .valueChanges
      .subscribe((result: any) => {
        this.userName = result.data && result.data.getUserInfo.name;
        this.userEmail = result.data && result.data.getUserInfo.email;
      })
  }

  getData(): any {
		const user = this.userService.getValueTokenKey('user_id');
		return (this.letters = this.apollo
			.watchQuery<any>({
				query: this.profileService.letters,
				variables: {
					user_id: user,
				},
			})
			.valueChanges.pipe(map((result: any) => result.data.getUserLetters)));
  }
  
  getReplies(): any{
    const user = this.userService.getValueTokenKey('user_id');
    this.inbox.getMyReplys(user)
      .valueChanges
      .subscribe(({data: { getUserReplies }}) => {
        this.replies = getUserReplies;
      })
  }
}
