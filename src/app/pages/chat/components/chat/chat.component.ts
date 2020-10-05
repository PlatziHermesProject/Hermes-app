import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/core/services/people/people.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public people = [];
  public chatDetail = [];

  constructor(private peopleService: PeopleService,
    private userService: UserService) { }

  async ngOnInit(): Promise<void> {

    const resp = await this.getChats();
    this.people = resp.data.getPrivateChatsRooms;
    console.log(resp.data.getPrivateChatsRooms);
  }

  getChats(): Promise<any> {

    const userId = this.userService.getValueTokenKey('user_id');
    return this.peopleService.get_chats(parseInt(userId, 10)).toPromise();
  }

  async getChat($event) {
    console.log('En el componente padre', $event);

    const resp = await this.getDetailChat(parseInt($event, 10));

    this.chatDetail = resp.data.getMessagesPrivateChat;
    console.log('detalle desde el componente', this.chatDetail);

  }

  getDetailChat(idChat: number): Promise<any> {
    return this.peopleService.get_chat_detail(idChat).toPromise();
  }

}
