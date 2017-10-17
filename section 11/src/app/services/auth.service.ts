import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt'; 
import 'rxjs/add/operator/map'; 

@Injectable()
export class AuthService {
  currentUser: any; 


  // on construction see if token exists already and login automatically
  constructor(private http: Http) {
    let token = localStorage.getItem('token');
    if (token) {

      // token comes back with object with properties: name, admin boolean, and a 'sub' string
      this.currentUser = new JwtHelper().decodeToken(token);
      console.log('currentUser', this.currentUser)
    }
  }

  login(credentials) { 
   return this.http.post('/api/authenticate', JSON.stringify(credentials))
    // want to convert the response to true or false
    .map(response => {
      let result = response.json();
      
      // if token exists then save it
      if (result && result.token) {
        localStorage.setItem('token', result.token);

        // use angular helper to decide token to user name
        this.currentUser = new JwtHelper().decodeToken(localStorage.getItem('token'));
        console.log('currentUser', this.currentUser)

        return true; 
      }

      // if token doesnt exist then return false for authentication
      else return false; 
    });
  }

  // when logging out delete token saved and reset current user
  logout() { 
    localStorage.removeItem('token');
    this.currentUser = null;
  }

  // see if token is expired
  isLoggedIn() { 
    let token = localStorage.getItem('token');

    if(token){
      // fake token doesnt have an exo date but can set one on the backend
      // let exp = getTokenExpirationDate(token)
      // console.log(exp)
    }

    
    return tokenNotExpired('token');
  }
}

