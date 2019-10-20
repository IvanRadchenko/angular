import { Component, Input, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';


@Component({
  selector: 'passenger-count',
  template: `<div>
    <h3>Airlines Passengers passenger count</h3>
    <div>
      Total Passengers: {{ checkedInCount }} / {{ items.length }}
    </div>
   </div>`
})

export class PassengerCountComponent implements OnInit {
  checkedInCount: number = this.countCheckedIn();

  @Input()
  items: Passenger[];

  countCheckedIn(): number {
    if (!this.items) return;
    return this.items.filter( (passenger: Passenger) => {
      return passenger.checkedIn;
    }).length;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.checkedInCount = this.countCheckedIn();
  }
}
