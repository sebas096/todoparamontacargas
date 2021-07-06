import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { UsersComponent } from './users/users.component';
import { ProductsAdminComponent } from './products-admin/products-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LayoutComponent, UsersComponent, ProductsAdminComponent, UsersComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class AdminModule { }
