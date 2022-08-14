import { useState } from "react"
import ItemCount from "./ItemCount"

const ItemDetail = ({detalleProducto}) => {

  let stock = 5
  const [contador, setContador] = useState(0)
  const [cantidadProd, setCantidadProd] = useState(0)

  const onAdd =(quantityToAdd)=>{
    setCantidadProd(quantityToAdd)  
  } 



  const {id, nombre, marca, imagen, categoria, descripcion, precio} = detalleProducto

    return (
      <div className="card__item__detalle">
      <h2>{nombre}</h2>
      <img src={imagen} alt={nombre}/>
      <p>$ {precio}</p>
      <p>{descripcion}</p>
      <p>El contador va: {contador}</p>
      <ItemCount contador={contador} setContador={setContador} stock={stock} onAdd={onAdd}/>
      </div>
    )


}
export default ItemDetail