import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/main/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/introduction/introduction.module').then(m => m.IntroductionModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  }, {
    path: 'product',
    loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule)
  }, {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule)
  },
  {
    path: 'detail-product',
    loadChildren: () => import('./pages/detail-product/detail-product.module').then(m => m.DetailProductModule)

  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then(m => m.PaymentModule),
    canActivate: [AuthGuard]

  },
  {
    path: 'detail-account',
    loadChildren: () => import('./pages/detail-account/detail-account.module').then(m => m.DetailAccountModule),
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'change-password',
    loadChildren: () => import('./pages/change-password/change-password.module').then(m => m.ChangePasswordModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'user-product',
    loadChildren: () => import('./pages/user-product/user-product.module').then(m => m.UserProductModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
