import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  products: any[];
  totalValue: number;
  constructor() { }

  ngOnInit() {
    const cartList = sessionStorage.getItem("cart");
    this.products =   !!cartList ? JSON.parse(cartList) : [] ;
    this.totalValue =  this.products.reduce((previus,next) => parseInt(previus) + parseInt(next.price), 0 )
  }

}
