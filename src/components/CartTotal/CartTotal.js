import React from 'react';
import {connect} from 'react-redux'
import './CartTotal.scss'


const CartTotal = (props) => {
    const {productList} = props;
    const productsInCart = productList.filter((product) => product.cartCounter);
    const getTotalPrice = () => {
        const totalPrice = productsInCart.reduce((sum, currentItem) => (sum + (currentItem.price * currentItem.cartCounter)), 0);
        return totalPrice;
    }
    return (
        <div className='cart-total'>
            <div className='cart-total-title'>
                Total:
            </div>
            <div className='cart-total__price'>
                {getTotalPrice()}$
            </div>
        </div>
    )
}

const mapStoreToProps = (store) => {
    return {
        productList: store.productList,
    }
}

export default connect(mapStoreToProps)(CartTotal)
