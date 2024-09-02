import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(public route: Router, public userService: UserService) {}
  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.userService.checkAuthentication();
      this.route.navigate(['/dashboard']);
    }
  }
}
