import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: any[];
  totalValue: number;
  constructor() { }

  ngOnInit() {
    const cartList = sessionStorage.getItem("cart");
    this.products =   !!cartList ? JSON.parse(cartList) : [] ;
    this.calcTotalValue();
  }

  removeFromCart(productToRemove) {
    const cartList = sessionStorage.getItem("cart");
    const previusProducts: any[] =   !!cartList ? JSON.parse(cartList) : [] ;
    this.products = previusProducts.filter( (product)  => {
          return productToRemove.id != product.id;
    });
    sessionStorage.setItem("cart",JSON.stringify(this.products));
    this.calcTotalValue();
  } 

  calcTotalValue(){

    this.totalValue =  this.products.reduce((previus,next) => parseInt(previus) + parseInt(next.price), 0 )
    console.log(this.totalValue);
    
  }
}
