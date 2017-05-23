import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DashboardHomeComponent } from './home/dashboard-home.component';

import { CarsComponent } from './cars/cars.component';
import { AddCarComponent } from './add-car/add-car.component';
import { EditCarComponent } from './edit-car/edit-car.component';
import { CarComponent } from './car/car.component';

import { NotesComponent } from './notes/notes.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { EditNoteComponent } from './edit-note/edit-note.component';

import { AuthGuard } from '../shared/guards/auth-guard.service';

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
      {
        path: 'notes',
        children: [
          {
            path: '',
            component: NotesComponent,
          },
          {
            path: 'add',
            component: AddNoteComponent,
          },
          {
            path: ':id',
            component: CarComponent,
          },
          {
            path: ':id/edit',
            component: EditNoteComponent,
          },
        ]
      },
    ]
  },
];

export const dashboardRouting: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);
