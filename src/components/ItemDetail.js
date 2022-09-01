import ItemCount from "./ItemCount"
import { useState } from "react"
import { CartContext } from "../context/CartContext"
import { useContext } from "react"
import Swal from 'sweetalert2'

const ItemDetail = ({detalleProducto}) => {
  
  let stock = 5
  const [contador, setContador] = useState(0)

  const {carrito, agregarItem, estaEnCarrito}= useContext(CartContext)
  const {id, nombre, marca, imagen, categoria, descripcion, precio} = detalleProducto
  
  const onAdd =()=>{
    Swal.fire({
      icon: "success",
      title: `Cantidad de productos: ${contador}`
    })
    estaEnCarrito(detalleProducto.id)
    agregarItem(detalleProducto, contador)

  } 
  
  


    return (
      <div className="card__item__detalle">
        <div className="card__item__detalle__imagen">
          <img src={imagen} alt={nombre}/>
        </div>
        <div className="card__item__detalle__info">
          <h2>{nombre}</h2>
          <p className="card__item__detalle__precio">$ {precio}</p>
          <p>{descripcion}</p>
          <div className="card__item__detalle__counter">
            <p>Cantidad: {contador}</p>
            <ItemCount contador={contador} setContador={setContador} stock={stock} onAdd={onAdd}/>
          </div>
        </div>
      </div>
    )


}
export default ItemDetail