import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class WriteService {

  mutation = gql`
    mutation ($user_id: ID!, $name: String!, $content: String!){
      createLetter(user_id: $user_id, name: $name, content: $content){
        status
        code
        message
      }
    }
  `;

  constructor(
    private apollo: Apollo
  ) { }

  addLetter(userLetter: string, nameLetter: string, contentLetter: string): any {
    return this.apollo.mutate({
      mutation: this.mutation,
      variables: {
        user_id: userLetter,
        name: nameLetter,
        content: contentLetter
      }
    });
  }


}
