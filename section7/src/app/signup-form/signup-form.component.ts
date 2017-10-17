import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import  { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

	form = new FormGroup({
		account: new FormGroup({
			username2: new FormControl(''),
		}),
		// create username form control with email validation - can keep adding validators to an aaray
		username: new FormControl('',
			// sync validators
			[Validators.required,
			UsernameValidators.cannotContainSpace],
			// async validators
			UsernameValidators.shouldBeUnique
		), 
		password: new FormControl('', Validators.required)
	});


	get username() { return this.form.get('username'); }
	get password() { return this.form.get('password'); }

	get username2() { return this.form.get('account.username'); }

	loginMethod(){

		// create fake backend auth service
		let authService = {
			login:  (data) => {return false}
		};

		// passing username and password json
		let isValid = authService.login(this.form.value);

		if(!isValid){
			this.form.setErrors({
				invalidLogin: true
			});
		}
	}
}
