import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Product} from './product'
import { Observable } from 'rxjs';
import { Category } from '../site-framework/category';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  

  
  constructor(private httpClient:HttpClient) { }
  //Method for Sidebar
  getCategories():Observable<Category>{
    const catgoriesUrl='http://localhost:3000/categories';
    return this.httpClient.get<Category>(catgoriesUrl);
  }
  //Method for all productsS
  getAllProducts():Observable<any>{
    const productUrl='http://localhost:3000/products';
    return this.httpClient.get<any>(productUrl);

  }
  createProduct(productBody):Observable<Product>{

    const productUrl='http://localhost:3000/products';
     return this.httpClient.post<Product>(productUrl,productBody);
  }
  viewProduct(productId):Observable<Product>{
    const productUrl='http://localhost:3000/products/'+productId;
    return this.httpClient.get<Product>(productUrl);

  }
  updateProduct(productId,productBody):Observable<any>{
    const productUrl='http://localhost:3000/products/'+productId;
    
    return this.httpClient.put<any>(productUrl,productBody)
 
  }
  deleteProduct(productId):Observable<any>{
    const productUrl='http://localhost:3000/products/'+productId;
    return this.httpClient.delete<any>(productUrl);

  }
  searchCategoryproducts(categoryId):Observable<Product>{
    const productUrl='http://localhost:3000/products?categoryId='+categoryId;
    return this.httpClient.get<Product>(productUrl);

  }
  searchDateProducts(dateparam):Observable<Product>{
    const productUrl='http://localhost:3000/products?date='+dateparam;
    return this.httpClient.get<Product>(productUrl);//return observable 

  }
}
