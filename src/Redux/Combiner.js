import { combineReducers } from "redux";
import { ProductsReducer} from "./Reducers/ProductsReducer";
import {CartReducer} from "./Reducers/AddCartReducers"


export const reducers = combineReducers({
   products:ProductsReducer,
   cart: CartReducer

})