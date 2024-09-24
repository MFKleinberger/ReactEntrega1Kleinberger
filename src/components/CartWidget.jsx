import React from 'react'
import cart from '../assets/shopping_cart.svg'


const CartWidget = () => {
  return (
    <>
        <img src={cart} alt='carrito' style={{with: 40}}/>
        <span>(5)</span>
    </>
)
}

export default CartWidget