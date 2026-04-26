import React, { useContext } from 'react'
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from '../context/CartContext';
import { FaCheck } from "react-icons/fa";
import toast from 'react-hot-toast';




function Product({item}) {

    const navigate = useNavigate()
   
    const {cartItems, addToCart, addToFavorites, Favorites, removeFromFavorites} = useContext(CartContext);
 

    const InCart = cartItems.some(i => i.id === item.id);


    const handleAddToCart = () => {
        addToCart(item)

        toast.success(
            <div className="stoast_wrapper">
                <img src={item.images[0]} alt='' className='toast_img' />

                <div className="toast_content">
                    <strong>{item.title}</strong>
                    added to cart
                </div>
                
                <button className='btn' onClick={() => navigate('/Cart') }> View Cart</button>
                <div>
            </div>
        </div>
            ,{duration : 3500}
            
        )
    }

    const InFav = Favorites.some(i => i.id === item.id);
    const handleAddToFav = () => {
        if(InFav){
         removeFromFavorites(item.id)
         toast.error(`${item.title} Removed From favorites`)

        }else{

        
        addToFavorites(item)
        toast.success(`${item.title} add To favorites`)
    }
    }

   

  return (
    <div className={`product ${InCart ? 'in_cart' : ''}`}>
       <Link to={`/products/${item.id}`}>

       <span className='ststus_cart'><FaCheck /> in cart</span>
       
    
     <div className='img_product'>

            <img src={item.images[0]} alt=''/>

        </div>
        
       <p className='name_product'>{item.title}</p>


        <div className='stars'>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStarHalfStroke />
        </div>

    
 <p className='price'><span>$ {item.price}</span></p>

</Link>
    <div className='icons'>
        <span className='btn_addtocart' onClick={handleAddToCart}><FaCartArrowDown /></span>
        <span className={`${InFav ? "in_fav" : ""}`} onClick={handleAddToFav}><FaRegHeart /></span>
        <span><FaShare /></span>

    </div>
   </div> 
  )
}

export default Product