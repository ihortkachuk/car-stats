import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/authService';
import { fadeIn } from '../animations/fade-in';

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.sass'],
  animations: [fadeIn]
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isFetching: boolean = false;
  error: string;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const { username, password } = this.form.value;
    this.isFetching = true;
    this.error = '';
    this.authService.login(username, password).then(
      () => {
        this.router.navigate(['dashboard']);
      },
      (err) => {
        const body = err.json() || '';
        this.error = body ? body.message : err.message;
        this.isFetching = false;
      }
    );
  }
}
