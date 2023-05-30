import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn === 'true') {
      return true; // User is logged in, allow access to the requested route
    } else {
      this.router.navigate(['/login']);
      return false; // User is not logged in, redirect to the login page
    }
  }
}
