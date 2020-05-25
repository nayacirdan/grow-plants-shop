import React from 'react';
import Product from "../../Product/Product";
import {connect} from "react-redux";
import CartTotal from "../../CartTotal/CartTotal";
import ProductInCart from "../../ProductInCart/ProductInCart";
import './Cart.scss'
import CartForm from "../../Form/Form";


const Cart = (props) => {

    const {history, productList} = props;
    const nowPath = history.location.pathname;
    debugger;
    const productsInCart = productList.filter((product) => product.cartCounter);
    const productsBought = productList.filter((product) => product.bought);
    let cartProducts;
    if (productsInCart.length) {
        cartProducts = productsInCart.map((product) => {
            return (<ProductInCart product={product}
                                   key={product.vendorCode}
                                   nowPath={nowPath}

            />)

        })
    }
    const fullCart = <div className='cart-full'>

        <div className='cart-product-list product-list'>
            {cartProducts}
            <CartTotal/>
        </div>
        <CartForm/>
    </div>

    const emptyCart = <div className='cart-empty'>
        <div className='empty-cart-title'>
            Cart is empty, choose some products and add them into cart
        </div>
    </div>

    const alreadyBoughtCart=<div className='already-bought-cart'>
        <div className='bought-cart-title'>
           Thank you for your order.
            Our manager will contact you as soon as possible.
        </div>
    </div>

    const chooseCart=()=>{
        if(productsInCart.length){
             return fullCart;
        } else if(productsBought.length) {
            return alreadyBoughtCart;
        } else {
            return emptyCart;
        }
    }

    return <div className='cart-main'>
        {chooseCart()}
    </div>

    /*<div className='cart-main'>

        <div className='cart-product-list product-list'>
            {cartProducts}
            <CartTotal/>
        </div>
        <CartForm/>
    </div>*/

}
const mapStoreToProps = (store) => {
    return {
        productList: store.productList,
    }
}

export default connect(mapStoreToProps)(Cart);