import React from 'react';
import {NavLink} from "react-router-dom";
import {growth} from '../../icons/growth';
import './Header.scss';
import {withRouter} from "react-router";

const Header =(props)=> {
    const {history}=props;
    const logoRed=()=>{
        history.push('/')
    }
        return (
            <header className='header'>
                <div className='container'>
                    <div className='header-logo'onClick={logoRed}>
                        <div className='logo-icon'>{growth('rgb(37, 75, 37)')}</div>
                        <div className='logo-text'>Grow</div>
                    </div>
                    <nav className='header-nav'>
                        <NavLink exact to='/' className='header-link'>Products</NavLink>
                        <NavLink exact to='/favourites' className='header-link'>Favourites</NavLink>
                        <NavLink exact to='/cart' className='header-link'>Cart</NavLink>
                    </nav>
                </div>
            </header>
        );
    }

export default withRouter(Header);