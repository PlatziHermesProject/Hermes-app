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

  getLetters(): any{
    return this.apollo.watchQuery({
      query: this.letters
    })
  }

}