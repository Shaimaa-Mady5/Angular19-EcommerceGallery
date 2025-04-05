import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
    {path:"" , redirectTo:"gallery", pathMatch:'full'},
    {path:"home", redirectTo:"gallery" , pathMatch:'full'},
    {path:"gallery" , component:ProductsComponent , title:"Gallery"},
    {path:"details/:productId" , component:ProductDetailComponent, title:"Details"},
    {path:"**" , component:NotfoundComponent , title:"Page Not found"},
];
