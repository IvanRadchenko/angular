import { Component, OnInit } from '@angular/core';
import { Passenger } from '..//../models/passenger.interface';
import { PassengerDashboadService } from '../../passenger-dashboard.service';


@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template:`
  <div>
  {{title}}
  </div>
  <div>
    <h1>Explicit two-way data binding</h1>
    <input
    type="text"
    [ngModel]="name"
    (ngModelChange)="handleChange($event)"
    />
  <div>
  <h1>Implicit two-way data binding</h1>
    <input
    type="text"
    [(ngModel)]="name"
    />
  </div>
  <div>
  <h1>Template reference binding</h1>
    <input
    type="text"
    #username
    />
  </div>
    <p *ngIf="name">
      Searching for ...  {{name}}
    </p>
  </div>
  <div>
  <button type="button" (click)="handleClick()">Click Me</button>
  <button type="button" (click)="onClick(username.value)">Get value from Username</button>
  </div>
  <hr>

  <passenger-count
  [items]="passengers"
  >
  </passenger-count>
  <div *ngFor="let passenger of passengers">
  {{ passenger.fullname}}
  </div>
  <h3>Passenger Details Dumb Component</h3>

  <passenger-detail
    *ngFor="let passenger of passengers"
    [detail]="passenger"
    (remove)="handleRemove($event)"
    (edit)="handleEdit($event)"
  >
  </passenger-detail>

  <div>
  <hr>


  <h3>Airlines Passengers with Template expanded</h3>
  <ul>
    <template ngFor let-passenger let-i="index" [ngForOf]="passengers">
     <li>
       {{i}}:  {{passenger.fullname}}
     </li>
     </template>
  </ul>
 </div>
  <div>
   <h3>Airlines Passengers with implicit ForOf</h3>
   <ul>
      <li *ngFor="let passenger of passengers; let i = index;">
        <span class="status" [class.checked-in]="passenger.checkedIn"></span>
        <span class="status" [ngClass]="{'checked-in': passenger.checkedIn, 'checked-out': !passenger.checkedIn}"></span>
        {{i}}:  {{passenger.fullname}}
      </li>
   </ul>
  </div>
  <div>
  <h3>Airlines Passengers with implicit ForOf for a single style change</h3>
  <ul>
     <li *ngFor="let passenger of passengers; let i = index;">
       <span class="status" [style.backgroundColor]="(passenger.checkedIn ? 'green' : 'red')"></span>
       {{i}}:  {{passenger.fullname}}
     </li>
  </ul>
 </div>
 <div>
 <h3>Airlines Passengers with implicit ForOf and ngStyle for multpe style changesl</h3>
 <ul>
    <li *ngFor="let passenger of passengers; let i = index;">
      <span
      class="status"
      [ngStyle]="{backgroundColor: (passenger.checkedIn ? 'green' : 'red')}">
      </span>
      {{i}}: {{passenger.fullname}}
      <div class="children">
          Children: {{ passenger.children?.length ||  0 }}
          </div>
    </li>
    </ul>
  </div>
  `
})

export class PassengerDashboardComponent implements OnInit {
  title: string;
  name: string = '';
  passengers: Passenger[];



  constructor(
    private passengerDashboardService: PassengerDashboadService ,
  ){
    this.title = 'Hello world';
  }

  ngOnInit() {
    this.passengers = this.passengerDashboardService.getPassengers();
  }

  handleEdit(event: Passenger){
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id === event.id) {
       passenger = Object.assign({}, passenger, event);
      }

      return passenger;
    });
  }

  handleRemove(event: Passenger){
    this.passengers = this.passengers.filter((passenger: Passenger) => {
      return passenger.id !== event.id;
    });
  }

  handleClick(){
    this.name = "SomeName";
  }

  handleChange(value: string) {
    this.name = value;
  }

  onClick(value: string) {
    this.name = value;
    console.log(value);
  }


}
