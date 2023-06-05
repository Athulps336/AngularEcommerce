import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  // object to store incoming data
  searchInput= new BehaviorSubject('')    // this object is initialized as an empty string

  constructor(private http:HttpClient) { }
  // api call to access all product data
  viewAllProducts(){
    return this.http.get('http://localhost:3000/products')
  }

  // api to access single product data
  viewProduct(id:any){
    return this.http.get('http://localhost:3000/products/'+id)
  }

  //api to add new products

  addNewProduct(productObject:any){
    return this.http.post('http://localhost:3000/products',productObject)
  }

  // api to delete products
  deleteProduct(id:any){
    return this.http.delete('http://localhost:3000/products/'+id)
  }

  // api to update product
  updateProduct(id:any,pdata:any){
    return this.http.patch('http://localhost:3000/products/'+id,pdata)
  }

}
