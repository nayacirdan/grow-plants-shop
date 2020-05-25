import modal from "./modalReducer";
import productList from "./productListReducer";
import {combineReducers} from "redux";


const reducer=combineReducers({
    modal, productList
})

export default reducer;