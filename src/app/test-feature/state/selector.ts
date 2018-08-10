import * as fromProducts  from "./reducer"
import { createFeatureSelector, createSelector } from "@ngrx/store";

const getProductFeatureState =
    createFeatureSelector<fromProducts.ProductState>('testFeature');

export const getProducts = createSelector(
    getProductFeatureState,
    state => state.products
);
