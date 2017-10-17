import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';

import 'rxjs/add/operator/map';

@Injectable()
export class PokemonService extends DataService {
	/*
  	*
  	*
  	*
  	* 
  	 */
  	constructor(http:Http) {
  		super(http, 'api/raids/');
  	}


  	/*
  	*
  	*
  	*
  	* 
  	 */
  	getGyms(){
  		return super.getAll()
  		.map(data => data.gyms);
  	}
}