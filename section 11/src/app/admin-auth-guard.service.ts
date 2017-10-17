import { AuthGuard } from './auth-guard.service';
import { AuthService } from './services/auth.service';
import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AdminAuthGuard extends AuthGuard {

	// create base instance
	constructor(protected router: Router, protected authService: AuthService) { 
		super(router, authService);
	}

	// override canActivate to add admin auth
  	canActivate(route, state:RouterStateSnapshot) {

  		// use base instance to see if user logged in
    	let isAuthenticated = super.canActivate(route, state);
    	if (!isAuthenticated) return false; 

    	// see if user is admin
    	if (this.authService.currentUser.admin) return true; 

    	// redirect to no-access with query param url
    	this.router.navigate(['/no-access']);
    	return false;
  	}
}
