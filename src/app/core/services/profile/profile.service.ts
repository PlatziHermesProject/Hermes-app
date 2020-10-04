import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  query = gql`
    query ($user_id: ID!) {
      getUserInfo(user_id: $user_id){
        name
        email
      }
    }
  `;

  letters = gql`
    query ($user_id: ID!) {
      getUserLetters(user_id: $user_id){
        author_letter
        letter_id
        content
        avatar
      }
    }
  `;

  constructor(
    private apollo: Apollo
  ) { }

  getUserVars(userId: Number): any{
    return this.apollo.watchQuery({
      query: this.query,
      variables: {
        user_id: userId
      }
    })
  }
}
