import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import  { VerifyPass } from './VerifyPass.validators';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent {

  	// create form object
  	form = new FormGroup({
  		oldPass: new FormControl('', Validators.required, VerifyPass.VerifyPass),
  		newPass: new FormControl('', Validators.required),
  		newPassB: new FormControl('', Validators.required)
  	});

  	// getters
  	get oldPass() { return this.form.get('oldPass'); }
  	get newPass() { return this.form.get('newPass'); }
  	get newPassB() { return this.form.get('newPassB'); }

  	changedP:boolean = false;

  	changePassword(){

  		console.log('test',this.newPass.value,this.newPassB.value);

		if(this.oldPass.value !== 'abc123'){
			this.form.setErrors({
				invalidLogin: true
			});
		} else if (this.newPass.value !== this.newPassB.value){
			this.form.setErrors({
				passwordMismatch: true
			});
		} else {
			this.changedP = true;
		}
	}
}
