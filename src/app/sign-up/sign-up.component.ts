import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { fadeIn } from '../animations/fade-in';

@Component({
  templateUrl: 'sign-up.component.html',
  styleUrls: ['sign-up.component.sass'],
  animations: [fadeIn]
})
export class SignUpComponent implements OnInit {
  form: FormGroup;
  isCreated: boolean = false;

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

  signup() {
    const { username, password } = this.form.value;
    this.authService.signup(username, password).then(
      () => {
        this.isCreated = true;
        setTimeout(() => {
          this.router.navigate(['login']);
        }, 2000);
      }
    );
  }
}
