import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = 'anantkabra';
  password: string = 'anant@123';

  hide = true;
  constructor(private router: Router) {}

  onSubmit() {
    if (this.username == 'anantkabra' && this.password == 'anant@123') {
      this.router.navigate(['/home']);
    }
  }
}
