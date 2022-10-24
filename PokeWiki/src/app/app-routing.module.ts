import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { CreateProductPageComponent } from './create-product-page/create-product-page.component';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'detail', component: DetailPageComponent},
  {path: 'createproduct', component: CreateProductPageComponent},
  {path: 'productlist', component: ProductListPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
