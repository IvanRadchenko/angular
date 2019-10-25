import { Component, Input} from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component ({
  selector: 'passenger-form',
  styleUrls: ['passenger-form.component.scss'],
  template: `
  <form #form="ngForm" novalidate>
  {{detail | json}}

  <div>
    Passenger name:
    <input
      type="text"
      name="fullname"
      [ngModel]="detail?.fullname">
  </div>

  <div>
   Passenger id:
  <input
    type="number"
    name="id"
    [ngModel]="detail?.id">
  </div>

  <div>
  Passenger checkedIn:

    <label>
      <input
        type="radio"
        [value]='true'
        name="checkedIn"
        [ngModel]="detail?.checkedIn"
        (ngModelChange)='toogleCheckIn($event)'>
        Yes
    </label>
    <label>
      <input
        type="radio"
        [value]='false'
        name="checkedIn"
        [ngModel]="detail?.checkedIn">
        No
    </label>
  </div>

  {{form.value | json}}
  </form>
  `
})

export class PassengerFormComponent {
  @Input()
  detail: Passenger;

  toogleCheckIn(checkedIn: boolean) {
    if ()
  }
}
