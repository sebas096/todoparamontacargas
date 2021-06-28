import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any[];
  selectedProduct:any;
  constructor() { 

  }

  ngOnInit() {
      this.products = [ { name:"Montacarga 1", price:"2312312", description:"Filtro de aire para montacargar, tiene 5 meses de uso, se uso en una montacarga", brand:"CAT",id:"1",size:"20x20", new:"Nuevo",reference:1023,
                        image: { image1:"asda", image2:"asdasd" , image3:"asdasd"} },
                        { name:"Montacarga 2", price:"2312312", description:"Este es un repuesto de montacarga", brand:"CAT", id:"1",size:"20x20", new:"Nuevo",reference:1023},
                        { name:"Montacarga 3", price:"2312312", description:"Este es un repuesto de montacarga", brand:"CAT", id:"1",size:"20x20", new:"Nuevo",reference:1023},
                        { name:"Montacarga 4", price:"2312312", description:"Este es un repuesto de montacarga", brand:"CAT", id:"1",size:"20x20", new:"Nuevo",reference:1023},
                        { name:"Montacarga 5", price:"2312312", description:"Este es un repuesto de montacarga", brand:"CAT", id:"1",size:"20x20", new:"Nuevo",reference:1023},
                        { name:"prueba", price:"2312312", description:"Este es un repuesto de montacarga", brand:"CAT",id:"1",size:"20x20", new:"Nuevo",reference:1023}]
  }

  loadProduct(product){
    this.selectedProduct = product;
  }
}



