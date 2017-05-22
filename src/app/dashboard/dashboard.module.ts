import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { dashboardRouting } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import { DashboardHomeComponent } from './home/dashboard-home.component';

import { AuthGuard } from '../shared/guards/auth-guard.service'

@NgModule({
    imports: [
        CommonModule,
        dashboardRouting
    ],
    declarations: [
        DashboardComponent,
        DashboardHomeComponent
    ],
    providers: [
      AuthGuard
    ],
})
export class DashboardModule { }
