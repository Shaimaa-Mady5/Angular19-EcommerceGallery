import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../../core/services/products/product-service.service';
import { Subscription } from 'rxjs';
import { log } from 'node:console';
import { IProduct } from '../../core/shared/interfaces/iproduct';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute)
  private readonly productServiceService = inject(ProductServiceService)
  detailsProduct:IProduct | null=null;
  detailsSubscribeId!:Subscription;
  ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe({
        next:(p)=>{
          let prodId = p.get('productId');
          this.productServiceService.getSpecificData(prodId).subscribe({
            next:(response)=>{
              console.log(response)
             this.detailsProduct=response;
            },
            error:(err)=>{
              console.log(err)
            }
          })
        },        
      })
  }

}
