import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class InboxService {

  constructor(private apollo: Apollo) { }

  getLetters = gql`
    query {
      getLetters{
        letter_id
      }
    }
  `;
}
