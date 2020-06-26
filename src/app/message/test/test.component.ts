import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  @Input() klocek;

  ngOnInit(): void {
  }

  wypisz ():void {
    if (this.klocek === true)
      this.klocek= false;
      else
      this.klocek= true;

  }

}
