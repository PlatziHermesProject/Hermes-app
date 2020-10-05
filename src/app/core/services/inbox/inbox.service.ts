import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class InboxService {
  constructor(private apollo: Apollo) {}

  letters = gql`
    query {
      getLetters {
        user_id
        letter_id
        content
        author_letter
        avatar
      }
    }
  `;

  reply = gql`
    mutation(
      $content: String!
      $user_id: ID!
      $letter_id: ID!
      $name: String!
    ) {
      replyLetter(
        content: $content
        user_id: $user_id
        letter_id: $letter_id
        name: $name
      ) {
        status
        code
        message
      }
    }
  `;
  getLetters(): any {
    return this.apollo.watchQuery({
      query: this.letters,
    });
  }

  replyLetter(
    $content: string,
    $userId: number,
    $letterId: number,
    $name: string
  ): any {
    return this.apollo.mutate({
      mutation: this.reply,
      variables: {
        content: $content,
        user_id: $userId,
        letter_id: $letterId,
        name: $name,
      },
    });
  }
}
