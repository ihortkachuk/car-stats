import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/authService'

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router,
              private authService: AuthService) {  }

  ngOnInit() {}

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
