import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any[];
  selectedProduct:any;
  constructor(private router:Router) { 

  }

  ngOnInit() {
      this.products = [ { name:"Montacarga 1", price:"150000", description:"Filtro de aire para montacargar, tiene 5 meses de uso, se uso en una montacarga", brand:"CAT",id:"1",size:"20x20", new:"Nuevo",reference:1023,
                        image: { image1:"asda", image2:"asdasd" , image3:"asdasd"} },
                        { name:"Montacarga 2", price:"125000", description:"Este es un repuesto de montacarga", brand:"CAT", id:"2",size:"20x20", new:"Nuevo",reference:1023},
                        { name:"Montacarga 3", price:"3000000", description:"Este es un repuesto de montacarga", brand:"CAT", id:"3",size:"20x20", new:"Nuevo",reference:1023},
                        { name:"Montacarga 4", price:"125000", description:"Este es un repuesto de montacarga", brand:"CAT", id:"4",size:"20x20", new:"Nuevo",reference:1023},
                        { name:"Montacarga 5", price:"125000", description:"Este es un repuesto de montacarga", brand:"CAT", id:"5",size:"20x20", new:"Nuevo",reference:1023},
                        { name:"prueba", price:"125000", description:"Este es un repuesto de montacarga", brand:"CAT",id:"6",size:"20x20", new:"Nuevo",reference:1023}]
  }

  loadProduct(product){
    this.selectedProduct = product;
  }

  addToCart(product) {  
    const cartList = sessionStorage.getItem("cart");
    let cart:any[] = !!cartList ? JSON.parse(cartList) : [];
    cart.push(product);
    sessionStorage.setItem("cart",JSON.stringify(cart));
    this.router.navigate(['/products/cart'])
  }

}



