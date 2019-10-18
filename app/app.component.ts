import { Component } from '@angular/core';
interface Passengers {
  id: number,
  fullname: string,
  checkedIn: boolean,
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
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
          {{i}}:  {{passenger.fullname}}
        </li>
     </ul>
    </div>
  `
})
export class AppComponent {
  title: string;
  name: string = '';
  passengers: Passengers[] = [{
    id: 1,
    fullname: 'Stephen',
    checkedIn: true
    },{
    id: 2,
    fullname: 'Rose',
    checkedIn: false
    }, {
    id: 3,
    fullname: 'James',
    checkedIn: true,
    }
  ]



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
}
