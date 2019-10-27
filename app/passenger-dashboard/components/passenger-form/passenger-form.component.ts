import { Component, Input} from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { Baggage } from '../../models/baggage.interface';
 
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
      required
      #fullname="ngModel"
      [ngModel]="detail?.fullname">
      <div *ngIf="fullname.errors?.required && fullname.dirty" class="error">
        Passenger name is required
      </div>
  </div>

  <div>
   Passenger id:
  <input
    type="number"
    name="id"
    required
    #id="ngModel"
    [ngModel]="detail?.id">
    <div *ngIf="id.errors?.required && id.touched" class="error">
    Passenger name is ID
    </div>
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
        [ngModel]="detail?.checkedIn"
        (ngModelChange)='toogleCheckIn($event)'>
        No
    </label>
    <label>
      <input
        type="checkbox"
        name="checkedIn"
        [ngModel]="detail?.checkedIn"
        (ngModelChange)='toogleCheckIn($event)'>
    </label>
  </div>

  <div *ngIf="form.value.checkedIn">
    Check in date:
    <input
    type="number"
    name="checkInDate"
    [ngModel]="detail?.checkedInDate"
    >
  </div>

  <div>
  Luggage:
  <select
  name = "baggage"
  [ngModel] = "detail?.baggage"
  >
    <option
    *ngFor = "let item of baggage"
    [value]="item.key"
    [selected]="item.key === detail?.baggage"> 
    {{item.value}}
    </option>

  </select>

  </div>

  {{form.value | json}}
  </form>
  `
})

export class PassengerFormComponent {


  @Input()
  detail: Passenger;

  baggage: Baggage[] = [{
    key: 'none',
    value: 'No baggage',
  },
  {
    key: 'hand-only',
    value: 'Hand baggage',
  },
  {
    key: 'hold-only',
    value: 'Hold baggage',
  }
  ];

  toogleCheckIn(checkedIn: boolean) {
    if (checkedIn) {
      this.detail.checkedInDate = Date.now();
    }
  }
}
