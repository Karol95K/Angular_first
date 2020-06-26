import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-car-tile',
  templateUrl: './car-tile.component.html',
  styleUrls: ['./car-tile.component.css']
})
export class CarTileComponent {
  @Input() carName;//= 'Fiat';
  @Input() carPrice;//= 150;
  @Input() numberOfSeats;// = 4;
  @Input() limit;
  @Input() available;


    constructor() { }

    onRentCar (): void {
      if (this.available === true) {
      this.available = false;
      } else {
      this.available = true;
      }
      }



}
