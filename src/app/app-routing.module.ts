import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { OrderProductComponent } from './order-product/order-product.component';

const routes: Routes = [
  {path:'addproduct', component : AddProductComponent},
  { path : '', redirectTo : 'addproduct', pathMatch : 'full'},
  { path: 'listproduct', component : ListProductComponent},
  { path :'orderproduct', component : OrderProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
