import { Component, OnInit } from '@angular/core';
import { PassengerDashboadService } from '../../passenger-dashboard.service';
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-viewer',
    styleUrls: ['passenger-viewer.component.scss'],
    template: `
    <div>
        {{passenger | json}}
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
}