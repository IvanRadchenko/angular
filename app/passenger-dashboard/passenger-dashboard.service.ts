import { Passenger } from './models/passenger.interface';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable( )
export class PassengerDashboadService {

  constructor(
    private http: Http
  ) {}

  getPassengers(): Passenger[] {
    return [{
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      children: null
      },{
      id: 2,
      fullname: 'Rose',
      checkedIn: false,
      children: [{name: 'Ted', age: 12},{name: 'Chloe', age: 14}],
      }, {
      id: 3,
      fullname: 'James',
      checkedIn: true,
      children: null
      }
    ]
  }
}
