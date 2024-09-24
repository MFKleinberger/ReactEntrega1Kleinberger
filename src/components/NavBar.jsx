import React from 'react'
import '../styles/navbar.css'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <>
            <div className="brand">Despacho de Pan</div>
            <ul>            
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#products">Productos</a></li>
                <li><a href="#honestfood">Alimentos honestos</a></li>
                <li><a href="#Contact">Contactanos</a></li>
                <CartWidget/>
            </ul>
        </>
    )
}

export default NavBar