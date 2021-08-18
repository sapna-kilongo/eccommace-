import { combineReducers } from "redux";
import { ProductsReducer } from "./Reducers/ProductsReducer";


export const reducers = combineReducers({
   products:ProductsReducer

})