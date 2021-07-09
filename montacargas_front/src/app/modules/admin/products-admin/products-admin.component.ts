import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.css']
})
export class ProductsAdminComponent implements OnInit {

  productsForm: FormGroup = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    price: ['', Validators.required],
    description : ['', Validators.required],
    brand : ['', Validators.required],
    size : ['', Validators.required],
    state : ['', Validators.required],
    reference : ['', Validators.required],
    active: [true, [Validators.required]],
    image : new FormArray([])
  });

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }
  get name() { return this.productsForm.get("name") } 
  get price() { return this.productsForm.get("price") }  
  get description() { return this.productsForm.get("description") }  
  get brand() { return this.productsForm.get("brand") }  
  get size() { return this.productsForm.get("size") }  
  get state() { return this.productsForm.get("state") }  
  get reference() { return this.productsForm.get("reference") }  
  get active() { return this.productsForm.get("active") }  
  get image() { return this.productsForm.get("image") }  
}
