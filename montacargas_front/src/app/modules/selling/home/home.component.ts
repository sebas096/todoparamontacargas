import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router) { }
  products:any;
  selectedProduct:any;
  ngOnInit() {

    this.products = [ 
      { name:"Montacarga 1", price:"2312312", description:"Este es un repuesto de montacarga", brand:"CAT"},
      { name:"Montacarga 2", price:"2312312", description:"Este es un repuesto de montacarga", brand:"CAT"},
      { name:"Montacarga 3", price:"2312312", description:"Este es un repuesto de montacarga", brand:"CAT"},
      { name:"Montacarga 4", price:"2312312", description:"Este es un repuesto de montacarga", brand:"CAT"},
      { name:"Montacarga 5", price:"2312312", description:"Este es un repuesto de montacarga", brand:"CAT"},
      { name:"prueba", price:"2312312", description:"Este es un repuesto de montacarga", brand:"CAT"}
    ];

  }
  loadProduct(product){
    this.selectedProduct = product;
  }

  addToCart(product) {  
    const cartList = sessionStorage.getItem("cart");
    let cart:any[] = !!cartList ? JSON.parse(cartList) : [];
    cart.push(product);
    sessionStorage.setItem("cart",JSON.stringify(cart));
    this.route.navigate(['/products/cart'])
  }
}
