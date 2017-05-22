import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CarsService } from '../../services/cars.service'

@Component({
  templateUrl: 'add-car.component.html',
})
export class AddCarComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private carsService: CarsService) {  }

  ngOnInit() {
    this.form = this.fb.group({
      gov_number: ['', Validators.required],
      car_type: ['', Validators.required],
      gov_number_trailer: [''],
    });
  }

  create(): void {
    this.carsService.add(this.form.value).then(() => {
      this.router.navigate(['/dashboard/cars']);
    });
  }
}
