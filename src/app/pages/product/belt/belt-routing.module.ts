
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeltComponent } from './belt.component';


const routes: Routes = [
  {
    path: '',
    component: BeltComponent,

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeltRoutingModule { }
