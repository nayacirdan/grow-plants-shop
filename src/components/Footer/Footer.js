import React from 'react';

import './Footer.scss'

const Footer =()=> {

        return (
            <footer className='footer'>
             <div className='socials'>
                 <a href='#' className='fa fa-twitter icon icon-social' target='_blank'></a>
                 <a href='#' className='fa fa-instagram icon icon-social' target='_blank'></a>
                 <a href='#' className='fa fa-facebook icon icon-social' target='_blank'></a>
             </div>
                <div className='footer-copyright'>
                    © 2020 Grow Gardens Cirdan comp.
                </div>
            </footer>
        );
    }

export default Footer;