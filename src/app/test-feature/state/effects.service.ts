import { Injectable } from '@angular/core';
import { ProductsListService } from '../services/products-list.service';
import { Effect, Actions, ofType } from "@ngrx/effects";
import { ActionTypes, GetProductsSuccess, GetProductsFailure } from "./actions";
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class EffectsService {

  @Effect() getProducts = this.actions$.pipe(
    ofType(ActionTypes.GET_PRODUCTS),
    switchMap((action) => (this.productListService.getProducts()
      .pipe(map((products) => (new GetProductsSuccess(products))),
        catchError((err) => of(new GetProductsFailure(err)))
      ))
    ))

  constructor(
    private productListService: ProductsListService,
    private actions$: Actions) { }

}
