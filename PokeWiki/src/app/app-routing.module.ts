import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailsPageComponent } from './pokemon-details-page/pokemon-details-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

const routes: Routes = [
  {path: 'home', component: PokemonListComponent},
  {path: 'detail/:id', component: PokemonDetailsPageComponent},
  {path: 'createproduct', component: ProductPageComponent},
  {path: 'productlist', component: ProductListPageComponent},
  {path: '', redirectTo:'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
