import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private httpClient:HttpClient) { 
   
  }

  getData():Observable<any>
  {
   return this.httpClient.get('https://fakestoreapi.com/products')
  }

  getSpecificData(id:string|null):Observable<any>
  {
   return this.httpClient.get(`https://fakestoreapi.com/products/${id}`)
  }
}
