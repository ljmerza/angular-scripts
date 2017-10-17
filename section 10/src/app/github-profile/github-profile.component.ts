import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

  	// if user is always going to nav away then can use
  	// this will only be called once even if same route is loaded
  	let id = this.route.snapshot.paramMap.get('id');
  	console.log(id);

  	// ngOnInit is not called if the same route is laoded -> the route is reused
  	// if navigating to the same route o we need to subscribe to the observable to always trigger
  	this.route.paramMap
  	.subscribe( params => {
  		// convert to number with +
  		let id = +params.get('id');
  		console.log(id);
  	});
  }


  submit(){
  	// same syntax of routerLink for first array param
  	this.router.navigate(['/followers'], {
  		queryParams: {page:1, order: 'newest'}
  	});
  }

}
