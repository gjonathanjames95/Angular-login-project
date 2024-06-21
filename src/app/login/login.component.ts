import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  isLoggedIn: boolean = false;

  login() {
    // You can implement actual login logic here, for now, use dummy credentials
    if (this.username === 'dummy' && this.password === 'password') {
      this.isLoggedIn = true;
    }
  }
}
