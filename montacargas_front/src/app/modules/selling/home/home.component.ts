import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  products:any;
  ngOnInit() {

    this.products = [ { name:"Montacarga 1", price:"2312312", description:"Este es un repuesto de montacarga", brand:"CAT"},
    { name:"Montacarga 2", price:"2312312", description:"Este es un repuesto de montacarga", brand:"CAT"},
    { name:"Montacarga 3", price:"2312312", description:"Este es un repuesto de montacarga", brand:"CAT"},
    { name:"Montacarga 4", price:"2312312", description:"Este es un repuesto de montacarga", brand:"CAT"},
    { name:"Montacarga 5", price:"2312312", description:"Este es un repuesto de montacarga", brand:"CAT"},
    { name:"prueba", price:"2312312", description:"Este es un repuesto de montacarga", brand:"CAT"}]

  }

}
