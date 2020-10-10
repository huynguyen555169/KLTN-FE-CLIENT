
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';



const routes: Routes = [
  {
    path: '',
    component: ProductComponent,

  },
  {
    path: 'fashion',
    loadChildren: () => import('./fashion/fashion.module').then(m => m.FashionModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
