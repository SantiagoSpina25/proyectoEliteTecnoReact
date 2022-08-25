import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import TituloPage from "./TituloPage"



const Carrito = () => {

  const {carrito, borrarItem, vaciarCarrito, obtenerPrecioTotal, obtenerCantidad}= useContext(CartContext)

  if (carrito.length !== 0) return (
    
    <>
      <TituloPage titulo="Carrito"/>
      <h3>Cantidad de productos en el carrito: {obtenerCantidad()}</h3>
      {carrito.map((producto, i)=>{
        return (
          <div key={i}>
          <article className="carrito__item">
            <img className="carrito__item__imagen" src={producto.imagen} alt={producto.nombre} />
            <div className="carrito__item__info">
              <h2>{producto.nombre}</h2>
              <h3> Precio: ${producto.precio}</h3>
              <h3> Cantidad: {producto.cantidad}</h3>
            </div>
            <div className="carrito__item__botones  ">
              <button onClick={()=>borrarItem(producto.id)}>Eliminar</button>
            </div>
          </article>
          </div>
        )
      })}
      <button onClick={vaciarCarrito}>Vaciar Carrito</button>
      <p className="carrito__precioTotal">Precio Total: ${obtenerPrecioTotal()} </p>
    </>
  )

  return(
    <div className="carrito__vacio">
      <h2>El carrito esta vacio!</h2>
      <p>Si quiere añadir algun producto, por favor, vaya al inicio</p>
      <Link to={"/"}><button>Inicio</button></Link>
    </div>
  )
} 
export default Carrito