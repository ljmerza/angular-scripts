import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/retry';

import { AppError } from './../app-error';
import { NotFoundError } from './../not-found-error';
import { BadInput } from './../bad-input';

@Injectable()
export class DataService {

  	constructor(private http:Http, private url:string) {	}

  	private handleError(error:Response){
  		if(error.status === 404)
 			  return Observable.throw(new NotFoundError(error));
  	 	else
 			  return Observable.throw(new AppError(error));
  	}

  	getAll() {
  	 	return this.http.get(this.url)
      .map(response => response.json())
  	 	.catch(this.handleError);
  	}

  	create(resource) {
  	 	return this.http.post(this.url, JSON.stringify(resource))
      .map(response => response.json().id)
  	 	.catch(this.handleError);
  	}

  	update(resource) {
  		// only update the properties that need updating
  		// not the entire object
  		return this.http.patch(`${this.url}/${resource}`, JSON.stringify({
  			isRead: true
  		}))
      .map(response => response.json())
  		.catch(this.handleError);;
  	}

  	delete(resource) {
  		// only update the properties that need updating
      	// not the entire object
  	 	return this.http.delete(`${this.url}/${resource}`)
      .map(response => response.json())
      // retry three times before failing
      .retry(3)
      // convert to promise
      .toPromise()
  	 	.catch(this.handleError);
  	}

}
