/* FETCH_PRODUCTS: 'FETCH_PRODUCTS',
    TOGGLE_FAVOURITES: 'TOGGLE_FAVOURITES',
    TOGGLE_MODAL:'TOGGLE_MODAL',
    CLOSE_MODAL:'CLOSE_MODAL',
    ADD_TO_CART:'ADD_TO_CART',
    DELETE_FROM_CART:'DELETE_FROM_CART',

     toggleModal: (product)=>dispatch(toggleModal(product)),
        closeModal: ()=>dispatch(closeModal()),
        addToCart:()=>dispatch(addToCart()),
        deleteFromCart:()=> dispatch(deleteFromCart()),
    */

import ActionsConst from "../actionConstatns/actionConstans";
import axios from 'axios';

export const toggleModal = (product) => (dispatch)=>{
    dispatch({type:ActionsConst.TOGGLE_MODAL, payload:product})
};

export const closeModal=()=>(dispatch)=>{
    dispatch({type:ActionsConst.CLOSE_MODAL})
};

export const addToCart=(product)=>(dispatch)=>{
    dispatch({type:ActionsConst.ADD_TO_CART, payload:product});
    dispatch({type:ActionsConst.CLOSE_MODAL})
}

export const deleteFromCart=(product)=>(dispatch)=>{
    dispatch({type:ActionsConst.DELETE_FROM_CART, payload:product});
    dispatch({type:ActionsConst.CLOSE_MODAL})
}

export const decreaseAmountInCart=(product)=>(dispatch)=>{
    dispatch({type:ActionsConst.DECREASE_AMOUNT_IN_CART, payload:product})
}

export const toggleFavourite=(product)=>(dispatch)=>{
    dispatch({type:ActionsConst.TOGGLE_FAVOURITES, payload:product})
}

export const fetchProducts=()=>(dispatch)=>{
    debugger;
    axios('/products')
        .then(result => {
            dispatch({type:ActionsConst.FETCH_PRODUCTS, payload:result.data.data});
        });
}

export const setProductsListFromLS=(productListFromLS)=>(dispatch)=>{
    dispatch({type:ActionsConst.GET_PRODUCTS_FROM_LS, payload:productListFromLS})
}
export const cleanCart=(productsInCart)=>(dispatch)=>{
    dispatch({type: ActionsConst.CLEAN_CART, payload:productsInCart})
}