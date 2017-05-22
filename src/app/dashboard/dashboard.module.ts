import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { dashboardRouting } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import { DashboardHomeComponent } from './home/dashboard-home.component';
import { CarsComponent } from './cars/cars.component';
import { AddCarComponent } from './add-car/add-car.component';
import { EditCarComponent } from './edit-car/edit-car.component';

import { AuthGuard } from '../shared/guards/auth-guard.service'
import { CarsService } from '../services/cars.service';

@NgModule({
    imports: [
        CommonModule,
        dashboardRouting,
        ReactiveFormsModule
    ],
    declarations: [
        DashboardComponent,
        DashboardHomeComponent,
        CarsComponent,
        AddCarComponent,
        EditCarComponent
    ],
    providers: [
      AuthGuard,
      CarsService
    ],
})
export class DashboardModule { }
