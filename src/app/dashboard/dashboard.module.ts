import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { dashboardRouting } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';

import { AuthGuard } from '../shared/guards/auth-guard.service'

@NgModule({
    imports: [
        CommonModule,
        dashboardRouting
    ],
    declarations: [
        DashboardComponent
    ],
    providers: [
      AuthGuard
    ],
})
export class DashboardModule { }
