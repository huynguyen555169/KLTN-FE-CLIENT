import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProductComponent } from './user-product.component';



const routes: Routes = [
  {
    path: '',
    component: UserProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProductRoutingModule { }
