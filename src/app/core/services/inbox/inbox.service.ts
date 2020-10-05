import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class InboxService {

  constructor(private apollo: Apollo) { }

  letters = gql`
    query {
      getLetters{
        user_id
        letter_id
        content
        author_letter
        avatar
      }
    }
  `;

  replys = gql`
    query($user_id: ID!){
      getUserReplies(user_id: $user_id){
        letter_id
        content
        author_letter
      }
    }
  `;

  getLetters(): any{
    return this.apollo.watchQuery({
      query: this.letters
    })
  }

  getMyReplys(userId: number):any {
    return this.apollo.watchQuery({
      query: this.replys,
      variables: {
        user_id: userId
      }
    });
  }
}