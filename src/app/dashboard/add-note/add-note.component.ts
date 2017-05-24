import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Car } from '../../shared/car.model';
import { CarsService } from '../../services/cars.service';
import { NotesService } from '../../services/notes.service';
import { getTimestamp } from '../../shared/helpers';

@Component({
  templateUrl: 'add-note.component.html',
})
export class AddNoteComponent implements OnInit {
  form: FormGroup;
  cars: Car[];
  maxDate: Date;

  constructor(private fb: FormBuilder,
              private carsService: CarsService,
              private notesService: NotesService,
              private router: Router) {  }

  ngOnInit() {
    this.maxDate = new Date();
    this.createForm();
    this.getCars();
  }

  createForm(): void {
    this.form = this.fb.group({
      car: ['', Validators.required],
      date: [new Date(), Validators.required],
      km: [null, Validators.required],
      pays: [null],
      works: ['', Validators.required]
    });
  }

  private getCars(): void {
    this.carsService.get().then(data => {
      this.cars = data;
    });
  }

  create() {
    const carId = this.form.value.car;
    const data = {
      car: carId,
      date: getTimestamp(this.form.value.date),
      km: this.form.value.km,
      pays: this.form.value.pays,
      works: this.form.value.works
    };

    this.notesService.add(carId, data).then(() => {
      this.router.navigate(['/dashboard/notes']);
    });
  }
}
