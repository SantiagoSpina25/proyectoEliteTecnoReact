const Item = ({producto}) => {
  return (
    <>
    <h2>{producto.nombre}</h2>
    <img src={producto.imagen} alt={producto.nombre}/>
    <p>$ {producto.precio}</p>
    <button>Añadir al carrito</button>
    </>
  )
}
export default Item