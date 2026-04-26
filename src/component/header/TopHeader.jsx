import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../img/logo.png'

import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import './header.css'
import { CartContext } from '../context/CartContext';
import SearchBox from './SearchBox';


function TopHeader() {

    const { cartItems, Favorites } = useContext(CartContext)

  return (
    <div className='top_header'>
        <div className='container'>
           <Link to="/" > <img src={Logo} alt='Logo'/></Link>

           


           <SearchBox />
            <div className='header_icons'>
                <div className='icon'>
                <Link to="/favorites">
                <FaHeart />
                <span className='count'>{Favorites.length}</span>
                </Link>
                </div>

                <div className='icon'>
                <Link to="/cart">
                <FaCartShopping />

                <span className='count'>{cartItems.length}</span>
                </Link>
                </div>
            </div>
        </div>

    </div>
  )
}

export default TopHeader