import { ActionTypes, ProductsActions } from "./actions"
import { Product } from "../models/product";
import { IntialProductState } from "./intialState";
import * as fromRoot from "../../store/reducers";

export interface State extends fromRoot.AppState {
    products: ProductState;
}

export interface ProductState {
    products: Product[];
    error: string;
}

export function reducer(state: ProductState = IntialProductState, action: ProductsActions) {
    switch (action.type) {
        case ActionTypes.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload
            }

        case ActionTypes.GET_PRODUCTS_FAIL:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state;
    }
}