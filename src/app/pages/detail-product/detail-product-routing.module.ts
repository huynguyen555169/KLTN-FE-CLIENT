import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailProductComponent } from './detail-product.component';



const routes: Routes = [
  {
    path: '',
    component: DetailProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailProductRoutingModule { }
