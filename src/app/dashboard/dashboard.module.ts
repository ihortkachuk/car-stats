import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/primeng';

import { dashboardRouting } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import { DashboardHomeComponent } from './home/dashboard-home.component';

import { CarsComponent } from './cars/cars.component';
import { AddCarComponent } from './add-car/add-car.component';
import { EditCarComponent } from './edit-car/edit-car.component';

import { NotesComponent } from './notes/notes.component';
import { AddNoteComponent } from './add-note/add-note.component';

import { AuthGuard } from '../shared/guards/auth-guard.service'
import { CarsService } from '../services/cars.service';
import { NotesService } from '../services/notes.service';

@NgModule({
  imports: [
    CommonModule,
    dashboardRouting,
    ReactiveFormsModule,
    CalendarModule
  ],
  declarations: [
    DashboardComponent,
    DashboardHomeComponent,
    CarsComponent,
    AddCarComponent,
    EditCarComponent,
    NotesComponent,
    AddNoteComponent
  ],
  providers: [
    AuthGuard,
    CarsService,
    NotesService
  ],
})
export class DashboardModule { }
