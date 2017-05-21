import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

import { AuthGuard } from '../shared/guards/auth-guard.service'

export const dashboardRoutes: Routes = [
  {
      path: 'dashboard',
      children: [
          {
              path: '',
              component: DashboardComponent,
              canActivate: [AuthGuard],
          },
      ]
  },
];

export const dashboardRouting: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);
