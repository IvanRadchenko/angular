import { Component } from '@angular/core';

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
  `
})
export class AppComponent {
  title: string;
  name: string = '';
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
