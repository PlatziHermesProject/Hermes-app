import { Component, OnInit } from '@angular/core';
import { InboxService } from '../../../../core/services/inbox/inbox.service';
import { UserService } from '../../../../core/services/user/user.service';

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.scss']
})
export class ResponsesComponent implements OnInit {

  items: any[] = [];
  constructor(
    private inbox: InboxService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    const user = this.userService.getValueTokenKey('user_id');
    this.inbox.getMyReplys(user)
      .valueChanges
      .subscribe(({data: { getUserReplies }}) => {
        this.items = [
          ...this.items,
          getUserReplies
        ]
      })
  }

}
