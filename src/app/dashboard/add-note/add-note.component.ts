import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Car } from '../../shared/car.model';
import { CarsService } from '../../services/cars.service';
import { NotesService } from '../../services/notes.service';

@Component({
  templateUrl: 'add-note.component.html',
})
export class AddNoteComponent implements OnInit {
  form: FormGroup;
  cars: Car[];

  constructor(private fb: FormBuilder,
              private carsService: CarsService,
              private notesService: NotesService,
              private router: Router) {  }

  ngOnInit() {
    this.createForm();
    this.getCars();
  }

  createForm(): void {
    this.form = this.fb.group({
      car: ['', Validators.required],
      date: [new Date(), Validators.required],
      km: ['', Validators.required],
      pays: [''],
      works: ['', Validators.required]
    });
  }

  private getCars(): void {
    this.carsService.get().then(data => {
      this.cars = data;
    });
  }

  private getTimestamp(date?: Date): number {
    const dateTime = date ? new Date(date).getTime() : new Date().getTime();
    return Math.floor(dateTime / 1000);
  }

  create() {
    const carId = this.form.value.car;
    const data = {
      car: carId,
      date: this.getTimestamp(this.form.value.date),
      km: this.form.value.km,
      pays: this.form.value.pays,
      works: this.form.value.works
    };

    this.notesService.add(carId, data).then(() => {
      this.router.navigate(['/dashboard/notes']);
    });
  }
}
