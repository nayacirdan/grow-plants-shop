import React from 'react';
import Product from "../../Product/Product";
import {connect} from "react-redux";
import './Favourites.scss'

const Favourites = (props) => {

    const {history, productList} = props;
    const nowPath = history.location.pathname;
    const favourites=productList.filter((product)=>product.isFavourite);

    let favouritesProducts=<div className='favourites-title'>You liked nothing for now</div>
    if(favourites.length) {
        favouritesProducts = favourites.map((product) => {
            return (<Product product={product}
                             key={product.vendorCode}
                             nowPath={nowPath}/>)

        });
    }

    return (
        <div className='favorite-product-list product-list'>
            {favouritesProducts}
        </div>
    );
}

const mapStoreToProps=(store)=>{
    return{
        productList: store.productList,
    }
}

export default connect(mapStoreToProps)(Favourites);