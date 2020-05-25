import './Product.scss'
import React from 'react';
import Button from "../Button/Button";
import FavouriteIcon from "../../icons/FavouriteIcon/FavouriteIcon";
import {connect} from "react-redux";
import {toggleModal, toggleFavourite} from "../../store/actionCreators/actionCreators";
import InCartIcon from "../../icons/InCartIcon";
import FonTBtn from "../Fontbtn";
import FontIcon from "../Fontbtn";


const Product = (props) => {

    const {title, price, color, imgUrl} = props.product;
    const {toggleModal, nowPath, product, toggleFavourite} = props;


    return (
        <div className='product-item'>
            <div className='product-info'>
                <h2 className='product-title'>{title}</h2>
                <p>Price: {price}$</p>
                <p>Color: {color}</p>
            </div>
            <img className='product-img' alt='plant' src={imgUrl}/>
            <div className='product-btns'>
                <FavouriteIcon isFavourite={product.isFavourite}
                               toggleFavourite={() => toggleFavourite(product)}/>


                {(nowPath === '/cart') ?
                    <Button text={<FontIcon iconClass='fa fa-times'/>}
                            classText='btn-delete-from-cart'
                            onClick={() => {
                                toggleModal(product)
                            }}/>
                    :
                    <>
                        <InCartIcon inCart={product.cartCounter}/>
                        <Button text='Add to cart'
                                classText='btn-to-cart'
                                onClick={() => {
                                    toggleModal(product)
                                }}/>
                    </>

                }
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return ({
        toggleModal: (product) => dispatch(toggleModal(product)),
        toggleFavourite: (product) => dispatch(toggleFavourite(product)),
    })
}

export default connect(null, mapDispatchToProps)(Product);