import ActionsConst from "../actionConstatns/actionConstans";
import update from "react-addons-update";

export const productList = (store = [], action) => {

    let product, productIndex, updatedProduct, prevCartCounter

    switch (action.type) {
        case ActionsConst.FETCH_PRODUCTS:
            return action.payload;

        case ActionsConst.GET_PRODUCTS_FROM_LS:
            return JSON.parse(action.payload);

        case ActionsConst.TOGGLE_FAVOURITES:
            product = action.payload;

            productIndex = store.indexOf(product);
            updatedProduct = {...product, isFavourite: !product.isFavourite};
            return update(store, {$splice: [[productIndex, 1, updatedProduct]]})

        case ActionsConst.ADD_TO_CART:
            product = action.payload;
            productIndex = store.indexOf(product);

            prevCartCounter = product.cartCounter || 0;
            updatedProduct = {...product, cartCounter: ++prevCartCounter};
            return update(store, {$splice: [[productIndex, 1, updatedProduct]]});

        case ActionsConst.DELETE_FROM_CART:
            product = action.payload;
            prevCartCounter = product.cartCounter || 0;
            productIndex = store.indexOf(product);
            updatedProduct = {...product, cartCounter: 0};
            return update(store, {$splice: [[productIndex, 1, updatedProduct]]});

        case ActionsConst.DECREASE_AMOUNT_IN_CART:
            product = action.payload;
            prevCartCounter = product.cartCounter || 0;
            productIndex = store.indexOf(product);
            updatedProduct = {...product, cartCounter: --product.cartCounter};
            return update(store, {$splice: [[productIndex, 1, updatedProduct]]});
        case ActionsConst.CLEAN_CART:
            const productInCart = action.payload;

            return store.map(product => {
                if (productInCart.includes(product)) {
                    productIndex = store.indexOf(product);
                    updatedProduct = {...product, cartCounter: 0, bought: true};
                    return updatedProduct
                } else {
                    return product
                }
            });
    }
    return store;
}
export default productList;