import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
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
   </div>
  `
})

export class PassengerDetailComponent {
  @Input()
  detail: Passenger;

  @Output()
  edit: EventEmitter<any> = new EventEmitter();
  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  editing: boolean = false;

  constructor() {   }

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

}