import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ProductsAdminComponent } from './products-admin/products-admin.component';

const routes: Routes = [
  { path:"",
    component: LayoutComponent,
    children: [
      { path:"products-admin", component: ProductsAdminComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
