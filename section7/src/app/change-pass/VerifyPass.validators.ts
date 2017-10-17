import { AbstractControl, ValidationErrors, AsyncValidator  } from '@angular/forms';


export class VerifyPass {
	static VerifyPass(control: AbstractControl) : Promise<ValidationErrors | null> {

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if(control.value !== 'abc123'){
					resolve({ VerifyPass: true });
				} else {
					resolve(null);
				}
			}, 2000);
		});
	}
}