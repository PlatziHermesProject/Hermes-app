import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PeopleService } from 'src/app/core/services/people/people.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  @Input() people = [];
  @Output() chatId: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onClick(chat_id: number) {
    console.log('En el componente hijo', chat_id);
    this.chatId.emit(chat_id);
  }
}
