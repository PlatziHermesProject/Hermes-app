import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  mutation = gql`
    mutation ($email: String!, $password: String!, $name: String!){
      createAccount(email: $email, password: $password, name: $name){
        status
        code
        message
      }
    }
  `;

  constructor(private apollo: Apollo) { }

  submitRegister(emailAuth: string, passwordAuth: string, nameAuth: string): any{
    return this.apollo.mutate({
      mutation: this.mutation,
      variables: {
        email: emailAuth,
        password: passwordAuth,
        name: nameAuth
      }
    });
  };
}
