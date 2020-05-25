import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ProductList from "../Pages/ProductList/ProductList";
import Favourites from "../Pages/Favourites/Favourites";
import Cart from '../Pages/Cart/Cart';
import './Main.scss'

const Main = () => {

    return (
        <div className='main'>
            <div className='container'>
                <Switch>
                    <Route exact path='/'  component={ProductList}
                    />
                    <Route exact path='/favourites' component={Favourites}/>}
                    />
                    <Route exact path='/cart' component={Cart}/>
                </Switch>
            </div>
        </div>
    );
}


export default Main;