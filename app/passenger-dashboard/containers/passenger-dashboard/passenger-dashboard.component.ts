import { Component, OnInit } from '@angular/core';
import { Passenger } from '..//../models/passenger.interface';


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

  <passenger-count
  [items]="passengers"
  >
  </passenger-count>
  <passenger-detail></passenger-detail>
  <div>
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



  constructor(){
    this.title = 'Hello world';
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

  ngOnInit() {
    this.passengers  = [{
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
