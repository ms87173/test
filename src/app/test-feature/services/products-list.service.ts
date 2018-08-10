import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';
import { ApiService } from '../../core/services';


@Injectable()
export class ProductsListService {

  constructor(
    // private apiService: ApiService

  ) { }

  getProducts(): Observable<Product[]> {

    /// Always use ApiService for doing an ajax call

    return of(products);
  }

}

const products: Product[] = [

  {
    id: 1,
    name: "coffee",
    description: "coffee is good"
  },

  {
    id: 2,
    name: "tea",
    description: "tea is bad"
  },


  {
    id: 3,
    name: "Whisky",
    description: "Whiskey is great"
  },

]
