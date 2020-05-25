import React from 'react';
import { star } from '../star'

const FavouriteIcon =(props)=> {

        const {isFavourite, toggleFavourite} = props;

        return (
            <div className='icon-container' onClick={toggleFavourite}>
                {star(isFavourite)}
            </div>
        );
    }


export default FavouriteIcon;