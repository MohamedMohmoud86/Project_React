import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

export default function CartProvider({ children }) {

// Favorite

  const [Favorites, setFaorites] = useState(() => {
    const savedFav = localStorage.getItem('FavoritesIems');
    return savedFav ? JSON.parse(savedFav) : [];
  });

  const addToFavorites = (item) => {
    setFaorites((prev) => {
      if(prev.some((i) => i. id === item.id)) return prev;
      return [...prev, item]
    })

  }

   useEffect(() => {
    localStorage.setItem('FavoritesIems', JSON.stringify(Favorites))
  }, [Favorites])


  const removeFromFavorites = (id) => {
    setFaorites((prev) => prev.filter((i) => i.id !== id))
  }



  // Cart

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartIems');
    return savedCart ? JSON.parse(savedCart) : []
  })


// increaseQuantity

const increaseQuantity = (id) =>{
  setCartItems(prevItems => prevItems.map(item =>
    item.id === id ? {...item , quantity: item.quantity + 1} : item
  ))
}


// decreaseQuantity

const decreaseQuantity = (id) => {
  setCartItems(prevItems => prevItems.map(item => item.id === id && item.quantity > 1 ?
    {...item, quantity : item.quantity -1} : item
  ))
}


// removeFromCart

const removeFromCart = (id) => {
  setCartItems((prevItems) => prevItems.filter(item => item.id !== id))
}




  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, {...item, quantity: 1}])
  }


  useEffect(() => {
    localStorage.setItem('cartIems', JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider value={{ cartItems, addToCart ,increaseQuantity, decreaseQuantity, removeFromCart, Favorites, addToFavorites, removeFromFavorites}}>
      {children}
    </CartContext.Provider>
  )
}