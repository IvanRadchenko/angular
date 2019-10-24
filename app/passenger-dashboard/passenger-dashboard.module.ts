import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Container
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';

//Components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';

//Services
import { PassengerDashboadService } from './passenger-dashboard.service';

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  exports: [
    PassengerDashboardComponent
  ],
  providers: [
    PassengerDashboadService,
  ],
  bootstrap: []
})


export class PassengerDashboardModule {


}

