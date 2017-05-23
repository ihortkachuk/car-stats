import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

import { Car } from '../../shared/car.model';
import { CarsService } from '../../services/cars.service';

@Component({
  templateUrl: 'cars.component.html',
})
export class CarsComponent implements OnInit {
  cars: Car[];
  processing: boolean = false;

  constructor(private carsService: CarsService) {  }

  ngOnInit() {
    this.carsService.get().then(data => {
      this.cars = data;
    });
  }

  delete(id: number): void {
    swal({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, delete it!",
    }).then(() => {
      this.processing = true;
      this.carsService.delete(id).then(() => {
        this.processing = false;
        this.cars = this.cars.filter(item => item.id !== id);
        swal(
          'Deleted!',
          'Your car has been deleted.',
          'success'
        );
      });
    });
  }
}
