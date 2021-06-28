import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products:any;
  constructor() { }

  ngOnInit() {

    this.products = [ { name:"Llanta de montacarga", price:"2312312", description:"Este es un repuesto de montacarga", brand:"CAT"},
    { name:"Motor", price:"2312312", description:"Este es un repuesto de montacarga", brand:"CAT"},
    { name:"Montacarga 3", price:"2312312", description:"Este es un repuesto de montacarga", brand:"CAT"},
    { name:"Montacarga 4", price:"2312312", description:"Este es un repuesto de montacarga", brand:"CAT"},
    { name:"Montacarga 5", price:"2312312", description:"Este es un repuesto de montacarga", brand:"CAT"},
    { name:"prueba", price:"2312312", description:"Este es un repuesto de montacarga", brand:"CAT"}]
  }

}
