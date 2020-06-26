import { Component, OnInit } from '@angular/core';
import { CarsServiceService } from '../cars-service.service';
import { Car } from '../car';

@Component({
  selector: 'app-car-tiles',
  templateUrl: './car-tiles.component.html',
  styleUrls: ['./car-tiles.component.css']
})
export class CarTilesComponent implements OnInit {

  carList: Car[];

  constructor(private carService: CarsServiceService) { }

  ngOnInit(): void {
    this.carList = this.carService.getCars();
  }

  //Observable (operacje asynchroniczne) 2/2 ->service.ts
  // ngOnInit(): void {
  //   this.carService.getCars().subscribe(carList => {
  //     console.log('got list of cars');
  //     this.carList = carList;
  //   }
  //   );
  // }
} 
