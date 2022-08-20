import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import TituloPage from "./TituloPage"



const Carrito = () => {

  const {carrito, emptyCart, obtenerPrecioTotal}= useContext(CartContext)

  return (
    
    <>
      <TituloPage titulo="Carrito"/>
      <button onClick={emptyCart}>Vaciar carrito</button>
      <p>Precio total de la compra: ${obtenerPrecioTotal()} </p>
    </>
  )
} 
export default Carrito