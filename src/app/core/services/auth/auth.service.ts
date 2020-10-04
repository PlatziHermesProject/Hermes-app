import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  mutation = gql`
    mutation($email: String!, $password: String!){
      loginAccount(email: $email, password: $password){
        status
        code
        message
        token
      }
    }
  `;

  constructor(
    private apollo: Apollo
  ) { }

  login_graphql(emailAuth: string, passwordAuth: string): any {
    return this.apollo.mutate({
      mutation: this.mutation,
      variables: {
        email: emailAuth,
        password: passwordAuth
      }
    });
  };

  get_user(): void {
    localStorage.getItem('token');
  }

  logout(): any{
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
    }
  }
}
