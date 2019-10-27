import { Component, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-detail',
  template: `
  <div>
  <span class="status" [class.checked-in]="detail.checkedIn"></span>
  <div *ngIf="editing">
  <input [value]="detail.fullname" (input)="onNameChange(name.value)" #name>
  </div>
   <div *ngIf="!editing">{{detail.fullname}}</div>
       <div class="children">
        Children: {{ detail.children?.length || 0 }}
       </div>
       <button (click)="toogleEdit()">{{ editing ? 'Done' : 'Edit'}}</button>
       <button (click)="onRemove()">Remove</button>
       <button (click)="goToPassenger()">Move to</button>
   </div>
  `
})

export class PassengerDetailComponent implements OnChanges {
  @Input()
  detail: Passenger;

  @Output()
  edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();
  @Output()
  remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();
  @Output()
  view: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  editing: boolean = false;

  constructor() {   }
  ngOnChanges(changes){
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue)
    }
  }

  onNameChange(value: string  ){
    this.detail.fullname = value;
  }
  toogleEdit() {
    if(this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }

  onRemove(){
    this.remove.emit(this.detail);
  }

  goToPassenger() {
    this.view.emit(this.detail);
  }
}
