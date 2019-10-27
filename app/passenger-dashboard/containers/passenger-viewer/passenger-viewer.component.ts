import { Component, OnInit } from '@angular/core';
import { PassengerDashboadService } from '../../passenger-dashboard.service';
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-viewer',
    styleUrls: ['passenger-viewer.component.scss'],
    template: `
    <div>
        <passenger-form
        [detail]="passenger"
        (update)="onUpdatePassenger($event)">
        </passenger-form>
    </div>
    `
})

export class PassengerViewerComponent implements OnInit {
    passenger: Passenger;

    constructor(
        private passengerDashboardService: PassengerDashboadService,
    ) { }

    ngOnInit() {
        this.passengerDashboardService
            .getPassenger(1)
            .subscribe((data: Passenger) => this.passenger = data);
    }

    onUpdatePassenger(event: Passenger) {
        this.passengerDashboardService
            .updatePassenger(event)
            .subscribe((data: Passenger) => {
                this.passenger = Object.assign({}, this.passenger, event);
            });
    }
}
