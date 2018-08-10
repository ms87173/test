import { Component, OnInit } from '@angular/core';
import { ProductsListService } from '../services/products-list.service';
import { Store, select } from '@ngrx/store';
import { TestFeatureActions } from '../state';
import * as FromProductSelectors from '../state/selector';
import { Product } from '../models/product';
import * as fromProductReducers from '../state/reducer';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];
  constructor(
    private store: Store<fromProductReducers.State>) { }

  ngOnInit() {

    // this.store.dispatch(new TestFeatureActions.GetProducts())
    // this.store.pipe(select(FromProductSelectors.getProducts))
    //   .subscribe((products) => {
    //     this.products = products;
    //   });
  }
}
