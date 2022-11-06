import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit {
  products: any;

  constructor(private productService:ProductsService
    ,private routes:Router
    ) { }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct(){
    this.productService.listProduct().subscribe((data:any)=>{
      this.products=data;
    })
  }

}
