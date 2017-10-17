import { Component } from '@angular/core';

@Component({
  selector: 'cfrom',
  templateUrl: './cfrom.component.html',
  styleUrls: ['./cfrom.component.css']
})
export class CfromComponent {
  log(x){
  	console.log(x);
  }


  submit(f){
  	console.log(f);
  }

  cntMethods = [
	  { id: 1, name:'a'},
	  { id: 2, name:'b'},
	  { id: 3, name:'c'}
  ];

}
