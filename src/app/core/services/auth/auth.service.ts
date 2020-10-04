import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Router } from '@angular/router';
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
    private apollo: Apollo,
    private router: Router
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

  signIn(email: string, password: string): void {
    this.login_graphql(email, password)
      .subscribe(({ data: { loginAccount }}) => {
        if (loginAccount.token) {
          localStorage.setItem('token', loginAccount.token);
          this.router.navigate(['/write']);
        }
      })
  }

  get_token(): void {
    localStorage.getItem('token');
  }

  logout(): any{
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
    }
  }
}
