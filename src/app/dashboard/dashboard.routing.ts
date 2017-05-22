import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DashboardHomeComponent } from './home/dashboard-home.component';
import { CarsComponent } from './cars/cars.component';
import { AddCarComponent } from './add-car/add-car.component';
import { EditCarComponent } from './edit-car/edit-car.component';

import { AuthGuard } from '../shared/guards/auth-guard.service'

export const dashboardRoutes: Routes = [
  {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate: [AuthGuard],
      children: [
          {
              path: '',
              component: DashboardHomeComponent,
          },
          {
              path: 'cars',
              children: [
                {
                    path: '',
                    component: CarsComponent,
                },
                {
                    path: 'add',
                    component: AddCarComponent,
                },
                {
                    path: ':id/edit',
                    component: EditCarComponent,
                },
              ]
          },
      ]
  },
];

export const dashboardRouting: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);
