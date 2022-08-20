import {NavLink} from "react-router-dom"

const CartWidget = () =>{

    return (
        <>
        <li><NavLink to="/carrito" className="material-symbols-rounded">shopping_cart</NavLink></li>
        </>
    )
}

export default CartWidget