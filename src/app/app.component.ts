import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/authService';

import '../../public/css/styles.css';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['dashboard']);
    }
  }
}
