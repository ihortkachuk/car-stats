import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/authService';

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.sass']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isFetching: boolean = false;

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
    this.authService.login(username, password).then(
      () => {
        this.router.navigate(['dashboard']);
      },
      () => {
        this.isFetching = false;
      }
    );
  }
}
