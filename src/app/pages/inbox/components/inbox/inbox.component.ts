import { ProfileService } from './../../../../core/services/profile/profile.service';
import { UserService } from './../../../../core/services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { InboxService } from '../../../../core/services/inbox/inbox.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit {
  letter: any = {};
  text: string;
  name: any;
  constructor(
    private inbox: InboxService,
    private userService: UserService,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.getName();
    this.nextCard();
  }
  nextCard(): void {
    this.inbox
      .getLetters()
      .valueChanges.subscribe(({ data: { getLetters } }) => {
        const max = getLetters && getLetters.length + 1;
        const letterId = (Math.random() * (max - 1) + 1).toFixed(0);
        this.letter = getLetters && getLetters[letterId];
        console.log(this.letter);
      });
  }
  reply(): void {
    this.openModal();
  }
  openModal(): void {
    const modal = document.getElementById('replyModal');
    modal.style.display = 'block';
  }
  closeModal(): void {
    const modal = document.getElementById('replyModal');
    modal.style.display = 'none';
  }
  sendMessage(content): void {
    const user = this.userService.getValueTokenKey('user_id');
    const letterId = this.letter.letter_id;
    const name = this.name;
    this.inbox
      .replyLetter(content, user, letterId, name)
      .subscribe(({ data: { replyLetter } }) => {
        console.log({ replyLetter });
        this.closeModal();
      });
  }
  reactLetter(): void {
    console.log('dasdas');
  }
  getName(): any {
    const user = this.userService.getValueTokenKey('user_id');
    this.profileService
      .getUserVars(user)
      .valueChanges.subscribe((result: any) => {
        this.name = result.data && result.data.getUserInfo.name;
      });
  }
}
