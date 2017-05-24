import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Car } from '../../shared/car.model';
import { NotesService } from '../../services/notes.service';
import { CarsService } from '../../services/cars.service';
import { getTimestamp } from '../../shared/helpers'

@Component({
  templateUrl: 'car.component.html',
  styleUrls: ['car.component.sass']
})
export class CarComponent implements OnInit {
  stats: any;
  car: Car;
  id: number = this.route.snapshot.params['id'];
  from: Date = new Date(new Date().setMonth(new Date().getMonth() - 1));
  to: Date = new Date();

  constructor(private route: ActivatedRoute,
              private notesService: NotesService,
              private carsService: CarsService) {  }

  ngOnInit() {
    this.getCar();
    this.getStats();
  }

  getCar(): void {
    this.carsService.getCar(this.id).then(data => {
      this.car = data;
    });
  }

  getStats(): void {
    const filters = {
      from: getTimestamp(this.from),
      to: getTimestamp(this.to)
    };
    this.notesService.getCarStats(this.id, filters).then(data => {
      this.stats = data;
    });
  }

  filter(): void {
    this.getStats();
  }
}
