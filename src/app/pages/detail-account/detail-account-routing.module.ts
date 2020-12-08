import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailAccountComponent } from './detail-account.component';



const routes: Routes = [
  {
    path: '',
    component: DetailAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailAccountRoutingModule { }
