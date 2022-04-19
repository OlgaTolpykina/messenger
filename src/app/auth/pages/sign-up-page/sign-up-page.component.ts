import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss'],
})
export class SignUpPageComponent implements OnInit {
  formGroup: FormGroup | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      username: ['', Validators.required],
      mail: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  register() {
    if (this.formGroup?.valid) {
      this.auth.register(this.formGroup.value).subscribe(() => {
        this.router.navigateByUrl('/');
      });
    }
  }
}
