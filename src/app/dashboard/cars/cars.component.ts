import { Component, OnInit } from '@angular/core';

import { Car } from '../../shared/car.model';
import { CarsService } from '../../services/cars.service';

@Component({
  templateUrl: 'cars.component.html',
})
export class CarsComponent implements OnInit {
  cars: Car[];

  constructor(private carsService: CarsService) {  }

  ngOnInit() {
    this.carsService.get().then(data => {
      this.cars = data;
    });
  }

  delete(id: number): void {
    this.carsService.delete(id).then(() => {
      this.cars = this.cars.filter(item => item.id !== id);
    });
  }
}
