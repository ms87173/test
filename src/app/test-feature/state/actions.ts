import { Action } from '@ngrx/store';

export enum ActionTypes {
    GET_PRODUCTS = "[testFeature]  Get Products",
    GET_PRODUCTS_SUCCESS = "[testFeature]  Get Products Success",
    GET_PRODUCTS_FAIL = "[testFeature]  Get Products Failure",
}

export class GetProducts implements Action {
    readonly type = ActionTypes.GET_PRODUCTS
    constructor() {

    }
}

export class GetProductsSuccess implements Action {
    readonly type = ActionTypes.GET_PRODUCTS_SUCCESS
    constructor(public payload) {
        this.payload = payload

    }
}

export class GetProductsFailure implements Action {
    readonly type = ActionTypes.GET_PRODUCTS_FAIL
    constructor(public payload) {
        this.payload = payload
    }
}

export type ProductsActions = GetProducts
    | GetProductsSuccess
    | GetProductsFailure;