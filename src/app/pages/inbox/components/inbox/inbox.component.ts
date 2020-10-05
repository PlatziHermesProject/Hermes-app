import { Component, OnInit } from '@angular/core';
import { InboxService } from '../../../../core/services/inbox/inbox.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  letter: any = {};
  constructor(private inbox: InboxService) { }

  ngOnInit(): void {
    this.inbox.getLetters()
      .valueChanges
      .subscribe(({ data: { getLetters }}) => {
        const max = getLetters && getLetters.length + 1;
        const letter_id = (Math.random() * (max - 1) + 1).toFixed(0);
        this.letter = getLetters && getLetters[letter_id];
        // console.log(this.letter);
      })
  }

}
