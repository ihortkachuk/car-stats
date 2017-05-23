import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Notes } from '../../shared/notes.model';
import { Car } from '../../shared/car.model';
import { NotesService } from '../../services/notes.service';
import { CarsService } from '../../services/cars.service';

@Component({
  templateUrl: 'edit-note.component.html',
})
export class EditNoteComponent implements OnInit {
  form: FormGroup;
  note: Notes;
  cars: Car[];
  maxDate: Date;
  id: number = this.route.snapshot.params['id']

  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private carsService: CarsService,
              private notesService: NotesService) {  }

  ngOnInit() {
    this.maxDate = new Date();
    this.notesService.getNote(this.id).then(data => {
      this.form.setValue({
        car: data.car.id,
        date: new Date(data.date),
        km: data.km,
        pays: data.pays,
        works: data.works
      });
    });
    this.createForm();
    this.getCars();
  }

  createForm(): void {
    this.form = this.fb.group({
      car: ['', Validators.required],
      date: ['', Validators.required],
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

  edit() {
    const data = Object.assign({}, this.form.value, {
      date: this.getTimestamp(this.form.value.date)
    });
    this.notesService.edit(this.id, data).then(() => {
      this.router.navigate(['/dashboard/notes']);
    });
  }
}
