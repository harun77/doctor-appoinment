import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppoinmentComponent } from './components/appoinment/appoinment.component';

const routes: Routes = [
  { path: '', component: AppoinmentComponent },
  { path: 'month/:id', component: AppoinmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
