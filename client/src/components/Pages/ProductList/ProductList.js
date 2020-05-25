import './ProductList.scss'
import Product from "../../Product/Product";
import React from 'react';

import {connect} from 'react-redux';
const ProductList =(props)=> {
        const {productList, history} = props;
        const nowPath=history.location.pathname;

    let products='Sorry, no products are available for now';
    if(productList) {
        products = productList.map((product) => {

            return (<Product product={product}
                             key={product.vendorCode}
                             nowPath={nowPath}
            />)
        });
    }
    console.log('products rendered');

        return (
            <div className='product-list'>
                {products}
            </div>
        );
    };
const mapStoreToProps=(store)=>{
    return {
        productList:store.productList,
    }
}
export default connect(mapStoreToProps)(ProductList);