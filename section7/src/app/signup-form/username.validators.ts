import { AbstractControl, ValidationErrors, AsyncValidator  } from '@angular/forms';


export class UsernameValidators {
	// made static so we can use without an isntance
	static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
		if((control.value as string).indexOf(' ') >= 0){
			// can return true or a message value
			// can return minLength key with value as hash with
			// requiredLength property
			// key is name of validation error on template
			return { cannotContainSpace: true }
		}
		return null;
	}

	// custom async validation
	static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors | null> {

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if(control.value === 'leo'){
					resolve({ shouldBeUnique: true });
				} else {
					resolve(null);
				}
			}, 2000);
		});
	}
}