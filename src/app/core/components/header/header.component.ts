import { map } from 'rxjs';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isLoggedIn$ = this.userService
    .getUserObservable()
    .pipe(map((user) => !!user));

  constructor(private userService: UserService, private router: Router) {}

  logout() {
    this.userService.clearData();
    this.router.navigateByUrl('/auth/sign-in');
  }
}
