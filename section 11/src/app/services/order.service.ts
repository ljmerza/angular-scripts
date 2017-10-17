import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers} from '@angular/http';
import { AuthHttp } from "angular2-jwt";

@Injectable()
export class OrderService {

  constructor(private authHttp: AuthHttp, private http: Http) {
  }

  getOrders() { 

  	// let headers = new Headers()
  	// let token = localStorage.getItem('token')
  	// headers.append('Authorization', 'Bearer ' + token)

  	// console.log(headers)

  	// let options = new RequestOptions({headers: headers})

  	// return this.http.get('api/orders', options)
  	// .map(response => { 
  	// 	console.log('response',response);
  	// 	return response.json()
  	// });

    return this.authHttp.get('/api/orders')
      .map(response => response.json());
  }
}
