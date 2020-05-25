import React, {useCallback, useEffect} from 'react';
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {addToCart, deleteFromCart, closeModal, fetchProducts,setProductsListFromLS} from "./store/actionCreators/actionCreators";
import './App.scss'
import FontIcon from "./components/Fontbtn";
import Footer from "./components/Footer/Footer";


const App = (props) => {
    const {
        location,
        productList,
        modalIsOpened,
        closeModal,
        setProductsListFromLS,
        fetchProducts,
        currentItem,
        deleteFromCart,
        addToCart
    } = props;

    const getProductList=useCallback(()=>{
        const productListFromLS=localStorage.getItem('Plant_Products');
        if(productListFromLS && productListFromLS !=='[]') {
            setProductsListFromLS(productListFromLS);
        } else {
            fetchProducts();
        }
    },[])

    useEffect(() => {
        getProductList();
    }, []);


    window.addEventListener("beforeunload", (ev) =>
    {
        ev.preventDefault();
        productList.map((product)=>{
            if (product.bought) {
                product.bought=!product.bought;
                return product
            }
        })
        localStorage.setItem('Plant_Products', JSON.stringify(productList));
        return 'String for browsers without preventDefault activation'
    });


    return (
        <>
            <Header/>
            <Main/>
            <Footer/>

            {location.pathname === '/cart' ?
                <Modal isOpened={modalIsOpened}
                       header='Delete from cart modal'
                       closeButton={'x'}
                       closeModal={closeModal}
                       text='Do you really want to delete this product?'
                       actions={[
                           <Button key='doNotDeleteFromCart'
                                   classText='btn-inModal btn-inModal__no'
                                   text='No'
                                   onClick={closeModal}/>,
                           <Button key='deleteFromCart'
                                   classText='btn-inModal btn-inModal__yes'
                                   text='Yes'
                                   onClick={()=>deleteFromCart(currentItem)}/>
                       ]}/>
                :
                <Modal isOpened={modalIsOpened}
                       header='Add to cart modal'
                       closeButton={<FontIcon iconClass='fa fa-times'/>}
                       closeModal={closeModal}
                       text='Do you want to add this cute plant to your cart?'
                       actions={[
                           <Button key='doNotAddToCart'
                                   classText='btn-inModal btn-inModal__no'
                                   text='No'
                                   onClick={closeModal}/>,
                           <Button key='addToCart'
                                   classText='btn-inModal btn-inModal__yes'
                                   text='Yes'
                                   onClick={()=>addToCart(currentItem)}/>
                       ]}/>
            }

        </>
    )
}



const mapStoreToProps=(store)=>{
    return {
        productList:store.productList,
        modalIsOpened:store.modal.modalIsOpened,
        currentItem:store.modal.currentItem
    }
}

const mapDispatchToProps=(dispatch) => {
    return({
        fetchProducts:()=>dispatch(fetchProducts()),
        addToCart:(product)=>dispatch(addToCart(product)),
        deleteFromCart:(product)=> dispatch(deleteFromCart(product)),
        closeModal:()=>dispatch(closeModal()),
        setProductsListFromLS:(productListFromLS)=>dispatch(setProductsListFromLS(productListFromLS)),
    })
}




export default withRouter(connect(mapStoreToProps, mapDispatchToProps)(App));
