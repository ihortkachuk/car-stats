import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Car } from '../../shared/car.model';
import { CarsService } from '../../services/cars.service';

@Component({
  templateUrl: 'edit-car.component.html',
})
export class EditCarComponent implements OnInit {
  form: FormGroup;
  car: Car;
  id: number = this.route.snapshot.params['id'];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private carsService: CarsService,
              private fb: FormBuilder) {  }

  ngOnInit() {
    this.createForm();
    this.carsService.getCar(this.id).then(data => {
      this.car = data;
      this.form.setValue({
          gov_number: data.gov_number,
          car_type: data.car_type,
          gov_number_trailer: data.gov_number_trailer
      });
    });
  }

  createForm() {
    this.form = this.fb.group({
      gov_number: ['', Validators.required],
      car_type: ['', Validators.required],
      gov_number_trailer: ['']
    });
  }

  edit() {
    this.carsService.edit(this.id, this.form.value).then(() => {
      this.router.navigate(['dashboard/cars']);
    });
  }
}
