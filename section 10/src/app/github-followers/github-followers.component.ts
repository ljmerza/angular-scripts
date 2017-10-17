import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(private service: GithubFollowersService, private route: ActivatedRoute) { }

  ngOnInit() {
  	// combine obserables into one
  	Observable.combineLatest([
  		this.route.paramMap,
  		this.route.queryParamMap
  	])
  	// .map( combined => { // converts to obserable any but we need a type any
  	.switchMap( combined => { // converts to any not an obserable so we can use the param
  		// array thats by observables list
  		const id = combined[0].get('id');
  		const page = combined[1].get('page');

  		// can then pass to service
  		// this.service.getAll({ id, page})
  		return this.service.getAll();
  	})
  	.subscribe( followers => {
  		this.followers = followers;
  	});

  	// can use subscribe or snapshot
    // this.route.queryParamMap.subscribe( params => {});
    // let page = this.route.snapshot.queryParamMap.get('page');
    // console.log(page);


    

  }
}
