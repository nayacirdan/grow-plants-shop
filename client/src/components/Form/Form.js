import './Form.scss';
import React from "react";
import {connect} from "react-redux";
import {Field, Formik, Form, ErrorMessage} from "formik";
import Button from "../Button/Button";
import formScheme from "./formScheme";
import {cleanCart} from "../../store/actionCreators/actionCreators";


const CartForm = (props) => {



    const {cleanCart, productList}=props;
    const handleSubmit = (e) => {
        const productsInCart = productList.filter((product) => product.cartCounter);
        debugger;
        console.log('You have new order:', productsInCart)
        cleanCart(productsInCart);
        console.log(productList);
    }

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                address: '',
                mobileNumber: ''
            }}
            onSubmit={handleSubmit}
            validationSchema={formScheme}
        >


            {(formikProps) => {
                return (
                    <div className='cart-form'>
                        <h2 className='form-title'>Fill out the form and we will contact you</h2>
                        <Form className='form'>
                            <Field className='form-element' component='input' type='text' name='firstName'
                                   placeholder='First name'/>
                            <div className='error-container'>
                                <ErrorMessage className='form-valid-error' name='firstName'/>
                            </div>

                            <Field className='form-element' component='input' type='text' name='lastName'
                                   placeholder='Last name'/>
                            <div className='error-container'>
                                <ErrorMessage className='form-valid-error' name='lastName'/>
                            </div>

                            <Field className='form-element' component='input' type='text' name='address'
                                   placeholder='Address'/>
                            <div className='error-container'>
                                <ErrorMessage className='form-valid-error' name='address'/>
                            </div>

                            <Field className='form-element' component='input' type='tel' name='mobileNumber'
                                   placeholder='Mobile number'/>
                            <div className='error-container'>
                                <ErrorMessage className='form-valid-error' name='mobileNumber'/>
                            </div>

                            <Button text='Checkout' classText='cart-form-btn btn' btnType='submit'
                                    isDisabled={!formikProps.isValid}/>
                        </Form>
                    </div>
                )

            }

            }

        </Formik>
    )

}
const mapStoreToProps=(store)=>{
return {
        productList: store.productList,
    }

}
const mapDispatchToProps=(dispatch)=>{
return{
cleanCart:(productsInCart)=>dispatch(cleanCart(productsInCart))
}

}

export default connect(mapStoreToProps, mapDispatchToProps)(CartForm);