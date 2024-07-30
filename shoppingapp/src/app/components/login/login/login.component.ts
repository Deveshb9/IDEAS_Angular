import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(public route: Router) {}
  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.route.navigate(['/dashboard']);
    }
  }
}
