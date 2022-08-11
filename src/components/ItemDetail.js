import { useState } from "react"
import ItemCount from "./ItemCount"

const ItemDetail = ({detalleProducto}) => {

  const [contador, setContador] = useState(0)
  let stock = 5

  const sumarContador =()=>{
    if(contador < stock){
    setContador(contador + 1)
    }
}

const restarContador =()=>{
    if(contador >1){
    setContador(contador - 1)
}
}    

  const {id, nombre, marca, imagen, categoria, descripcion, precio} = detalleProducto

  return (
    <div className="cardItemDetalle">
    <h2>{nombre}</h2>
    <img src={imagen} alt={nombre}/>
    <p>$ {precio}</p>
    <p>{descripcion}</p>
    <button>Comprar</button>
    <ItemCount contador={contador} sumarContador={sumarContador} restarContador={restarContador}/>
    </div>
  )
}
export default ItemDetail