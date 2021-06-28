import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellingRoutingModule } from './selling-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from 'src/app/shared/modals/product/product.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [HomeComponent, ProductsComponent, ProductComponent, CartComponent, PaymentComponent, LayoutComponent],
  imports: [
    CommonModule,
    SellingRoutingModule,
  ]
})
export class SellingModule { }
