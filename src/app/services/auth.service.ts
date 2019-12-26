import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router'
import { UserService } from './user.service'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private user: UserService) {

	}

	async canActivate(route) {
		if(await this.user.isAuthenticated()) {
			return true
		}

		this.router.navigate(['/login'])
		return false
	}
}
