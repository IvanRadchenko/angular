import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      {{title}}
    </div>
    <div>
      <input
      type="text"
      [ngModel]="name"
      (ngModelChange)="handleChange($event)"
      />
      <input
      type="text"
      [(ngModel)]="name"
      />
      <p>{{name}}</p>
    </div>
    <div>
    <button type="button" (click)="handleClick()">Click Me</button>
    </div>
  `
})
export class AppComponent {
  title: string;
  name: string = 'Ivan';
  constructor(){
    this.title = 'Hello world';
  }

  handleClick(){
    this.name = "SomeName";
  }

  handleChange(value: string) {
    this.name = value;
  }
}
