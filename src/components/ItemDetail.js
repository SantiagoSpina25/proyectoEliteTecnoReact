
const ItemDetail = ({detalleProducto}) => {

  const {id, nombre, marca, imagen, categoria, descripcion, precio, stock} = detalleProducto

  return (
    <div className="cardItemDetalle">
    <h2>{nombre}</h2>
    <img src={imagen} alt={nombre}/>
    <p>$ {precio}</p>
    <p>{descripcion}</p>
    <button>Comprar</button>
    </div>
  )
}
export default ItemDetail