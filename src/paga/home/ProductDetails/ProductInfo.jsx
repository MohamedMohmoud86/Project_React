import React, { useContext } from 'react'
import { FaRegHeart, FaShare, FaStar } from 'react-icons/fa'
import { FaRegStarHalfStroke } from 'react-icons/fa6'
import { TiShoppingCart } from 'react-icons/ti'
import { CartContext } from '../../../component/context/CartContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

function ProductInfo({ product }) {
    const navigate = useNavigate()




    const { cartItems, addToCart, removeFromFavorites, Favorites, addToFavorites } = useContext(CartContext);
    const InCart = cartItems.some(i => i.id === product.id);


    const handleAddToCart = () => {
        addToCart(product)

        toast.success(
            <div className="stoast_wrapper">
                <img src={product.images[0]} alt='' className='toast_img' />

                <div className="toast_content">
                    <strong>{product.title}</strong>
                    added to cart
                </div>

                <button className='btn' onClick={() => navigate('/Cart')}> View Cart</button>
                <div>
                </div>
            </div>
            , { duration: 3500 }

        )
    }


    const InFav = Favorites.some(i => i.id === product.id);
    const handleAddToFav = () => {
        if (InFav) {
            removeFromFavorites(product.id)
            toast.error(`${product.title} Removed From favorites`)

        } else {


            addToFavorites(product)
            toast.success(`${product.title} add To favorites`)
        }
    }


    return (

        <div className='details_item'>
            <h1 className='name'>{product.title}</h1>
            <div className='stars'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStarHalfStroke />
            </div>



            <p className='price'>$ {product.price}</p>

            <h2>Availability: <span>{product.availabilityStatus}</span></h2>
            <h5>Brand: <span>{product.brand}</span></h5>
            <p className='desc'>{product.description}</p>
            <h5 className='stock'><span>Hurry Up Only {product.stock} Products Left In Stock</span></h5>

            <button onClick={handleAddToCart} className={`btn ${InCart ? 'in_cart' : ''}`}>
                {InCart ? "Item in cart" : "Add to cart"}        <TiShoppingCart />
            </button>

            <div className='icons'>

                <span className={`${InFav ? "in_fav" : ""}`} onClick={handleAddToFav} ><FaRegHeart /></span>
                <span><FaShare /></span>

            </div>
        </div>
    )
}

export default ProductInfo