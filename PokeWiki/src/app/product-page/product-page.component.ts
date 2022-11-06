import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  addProduct: any;
  constructor(private fb:FormBuilder,
   private routes:Router,
    private productService:ProductsService
    ) { 
      this.addProduct=fb.group(
        {
          name:['',Validators.required],
          price:['',Validators.required],
          description:['',Validators.required],
          category:['',Validators.required],
          imageURL:['',Validators.required],
          phone:['',Validators.required],
          select:['',Validators.required]
      }
      )
    }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.addProduct.value);
    this.productService.addProduct(this.addProduct.value).subscribe((data:any)=>{
      console.log(data);
      this.routes.navigate(['/productlist']);
    })
  }

}
