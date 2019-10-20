import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Container
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';

//Components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PassengerDashboardComponent
  ],
  providers: [],
  bootstrap: []
})


export class PassengerDashboardModule {


}

