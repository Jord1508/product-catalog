import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  private products = [
    {id: 1, name : 'Celular', price : 1000 },
    {id: 2, name : 'Mac Laptop',price : 2200 },
    {id: 3, name : 'Tablet',price : 1500 },
    {id: 4, name : 'MP4',price : 600 }
  ]
  getProducts(){
    return this.products;
  }
}
