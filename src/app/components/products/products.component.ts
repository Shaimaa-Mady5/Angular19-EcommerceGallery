import { log } from 'console';
import { ProductServiceService } from './../../core/services/products/product-service.service';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from '../../core/shared/interfaces/iproduct';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit, OnDestroy{
 private readonly productServiceService = inject(ProductServiceService);
 allProducts:IProduct[]=[]
 subscribeId!:Subscription;

 ngOnInit(): void {
    this.subscribeId= this.productServiceService.getData().subscribe({
      next:(response)=>{
        this.allProducts=response;
        console.log(this.allProducts)
      },
      error:(err)=>{
        console.log(err)

      }
     })
 }
ngOnDestroy(): void {
  this.subscribeId.unsubscribe()
}
}
