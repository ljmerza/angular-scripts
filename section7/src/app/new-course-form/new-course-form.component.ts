import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {

	// another way to create a form 
  constructor(fb: FormBuilder) {
  	this.form = fb.group({
  		name: [], // can use array as array of args to form control - ie validators
  		contact: fb.group({
  			email: [],
  			phone: []
  		}),
  		topics: fb.array([])
  	});
  }

  ngOnInit() {
  }

  // form = new FormGroup({
  // 	topics: new FormArray([]), // empty array as starting values
  // 	name: new FormControl(),
  // 	contact: new FormGroup({
  // 		email: new FormControl(),
  // 		phone: new FormControl()
  // 	})
  // });

  form;

  addTopic(topic: HTMLInputElement) {
  	this.topics.push(new FormControl(topic.value));
  	topic.value = '';
  }

  get topics() {
  	return this.form.get('topics') as FormArray;
  }

  removeTopic(topic: FormControl){
  	const index = this.topics.controls.indexOf(topic);
  	this.topics.removeAt(index);
  }

}
