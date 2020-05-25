import './ProductInCart.scss'
import React from 'react';
import Button from "../Button/Button";
import FavouriteIcon from "../../icons/FavouriteIcon/FavouriteIcon";
import {connect} from "react-redux";
import {toggleModal, toggleFavourite, addToCart, decreaseAmountInCart} from "../../store/actionCreators/actionCreators";
import FontIcon from "../Fontbtn";


const ProductInCart = (props) => {

    const {title, price, imgUrl, cartCounter} = props.product;
    const {toggleModal, product, toggleFavourite, addToCart, decreaseAmountInCart} = props;

    return (
        <div className='product-inCart-item'>
            <div className='product-inCart-info'>
                <h2 className='product-inCart-title'>{title}</h2>
                <img className='product-inCart-img' alt='plant' src={imgUrl}/>
                <span>Price: {price}$</span>

            </div>



            <div className='product-inCart-amount-control'>

                <button className='decrease-product-amount btn' onClick={()=>decreaseAmountInCart(product)}>
                    <FontIcon iconClass='fa fa-minus'/>
                </button>
                <span className='product-inCart-amount'>{cartCounter}</span>
                <button className='increase-product-amount btn' onClick={()=>addToCart(product)}>
                    <FontIcon iconClass='fa fa-plus'/>
                </button>


            </div>

            <div className='product-inCart-counter'>
                Total price: {price*cartCounter}$
            </div>

            <div className='product-inCart-btns'>
                <FavouriteIcon isFavourite={product.isFavourite}
                               toggleFavourite={()=>toggleFavourite(product)}/>
                <Button text={<FontIcon iconClass='fa fa-times'/>}
                            classText='btn-delete-from-cart'
                            onClick={() => {toggleModal(product)}}/>
            </div>
        </div>
    );
}

const mapDispatchToProps=(dispatch)=>{
    return ({
        toggleModal:(product)=>dispatch(toggleModal(product)),
        toggleFavourite:(product)=>dispatch(toggleFavourite(product)),
        addToCart:(product)=>dispatch(addToCart(product)),
        decreaseAmountInCart:(product)=>dispatch(decreaseAmountInCart(product)),
    })
}

export default connect(null, mapDispatchToProps)(ProductInCart);