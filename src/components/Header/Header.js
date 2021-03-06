import React from 'react';
import icon from '../../images/logo.png';
import './header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={icon} alt=""/>

            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;