import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

//Container
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';


//Components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';

//Services
import { PassengerDashboadService } from './passenger-dashboard.service';

const routes: Routes = [
  { path: 'passengers',
    children: [
      { path: '', component: PassengerDashboardComponent},
      { path: ':id', component: PassengerViewerComponent}
    ]
  },
  // {path: '**', component: NotFoundComponent }
] 


@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerViewerComponent,
    PassengerFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    PassengerDashboadService,
  ],
  bootstrap: []
})


export class PassengerDashboardModule {


}

