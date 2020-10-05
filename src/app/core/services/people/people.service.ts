import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private apollo: Apollo) { }

  get_chats(id: number) {

    const query = gql`
      query {
      getPrivateChatsRooms(user_id: ${id}) {
        user_id
        chat_id
        name
        email
        status
        }
      }
    `;

    return this.apollo.query({
      query
    });
  }

  get_chat_detail(chatId: number) {

    const query = gql`
      query {
        getMessagesPrivateChat(chat_id: ${chatId}) {
          content
          created
          user_id
        }
      }
    `;

    return this.apollo.query({
      query
    });
  }

}
