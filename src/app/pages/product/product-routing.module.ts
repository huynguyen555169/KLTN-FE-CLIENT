
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
  },
  {
    path: 'shoes',
    loadChildren: () => import('./shoes/shoes.module').then(m => m.ShoesModule)
  },
  {
    path: 'watch',
    loadChildren: () => import('./watch/watch.module').then(m => m.WatchModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./wallet/wallet.module').then(m => m.WalletModule)
  },
  {
    path: 'belt',
    loadChildren: () => import('./belt/belt.module').then(m => m.BeltModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
