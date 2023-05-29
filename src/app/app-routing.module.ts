import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './shared/components/log-in/log-in.component';
import { RegFormComponent } from './shared/components/reg-form/reg-form.component';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';
import { TheaterBookingComponent } from './shared/components/theater-booking/theater-booking.component';
import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [
  { path: '', component: LogInComponent, pathMatch: 'full' },
  { path: 'regform', component: RegFormComponent },
  {
    path: 'theater',
    component: TheaterBookingComponent,
    canActivate: [AuthGuard],
  },
  { path: 'pageNotFound', component: PagenotfoundComponent },
  { path: '**', redirectTo: 'pageNotFound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
