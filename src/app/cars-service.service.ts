import { Injectable } from '@angular/core';
import { Car } from './car';
import { Observable, of } from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarsServiceService {

  private carList: Car [];

  constructor() {
    this.carList = [
      { carName: 'Volvo', carPrice: 300, limit: 250, available: true},
      { carName: 'Fiat', carPrice: 350, limit: 150, available: false},
      { carName: 'Vw', carPrice: 400, limit: 460, available: false},
      { carName: 'Mers', carPrice: 500, limit: 300, available: true}
    ];
   }

   getCars (): Car []{
     return this.carList;
   }

   // Observable (operacje asynchorniczne) 1/2 ->cat-tiles.ts
   
  //  getCars(): Observable<Car[]>{
  //   console.log('simulating slow server connection...');
  //    return of(this.carList).pipe(delay(3000));
  //  }
}
