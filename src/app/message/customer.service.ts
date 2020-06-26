import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private listCustomer: Customer [];

  constructor(listCustomer) {
    this.listCustomer =[
      { id: 1, firstName: 'Karol'},
      { id: 2, firstName: 'Artur'}
    ];
   }

   getCustomers (): Customer []{
     return this.listCustomer;
   }

}
